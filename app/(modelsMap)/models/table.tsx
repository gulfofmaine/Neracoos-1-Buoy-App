// Table from EDR data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import Table from "react-bootstrap/Table"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"
import { IItem } from "@gulfofmaine/tsstac"

import { round } from "Shared/math"

import { EDRResponse, Layer, LoadedData } from "./types"

/**
 * Construct a table from EDR data for selected STAC items
 *
 * @param loaded Loaded EDR data, this table is not in charge of loading data
 * @returns
 */
export const EdrTable = ({ loaded, after }: { loaded: LoadedData[]; after: Date }) => {
  let loadedTimes: string[] = filterTimes(loaded, after)

  return (
    <div style={{ maxWidth: "100%", overflowX: "scroll" }}>
      <Table striped={true} hover={true}>
        <TableHead loadedTimes={loadedTimes} />
        <tbody>
          {loaded.map(({ item, layer, response }) => {
            return (
              <React.Fragment key={item.id}>
                {layer.vars.map((l_var, i) => {
                  const unit = item.properties!["cube:variables"][l_var].unit
                  const standard_name = item.properties!["cube:variables"][l_var].description
                  return (
                    <ItemVarRow
                      l_var={l_var}
                      i={i}
                      layer={layer}
                      item={item}
                      standard_name={standard_name}
                      unit={unit}
                      loadedTimes={loadedTimes}
                      response={response}
                      key={`${item.id}-${l_var}`}
                    />
                  )
                })}
              </React.Fragment>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

/**
 * Display a single variable row for an item
 */
const ItemVarRow = ({
  l_var,
  i,
  layer,
  item,
  standard_name,
  unit,
  loadedTimes,
  response,
}: {
  l_var: string
  i: number
  layer: Layer
  item: IItem
  standard_name: any
  unit: any
  loadedTimes: string[]
  response: EDRResponse
}) => {
  return (
    <tr key={`${item.id}-${l_var}`}>
      {i === 0 ? (
        <th rowSpan={layer.vars.length}>
          <ItemInfo item={item} />
        </th>
      ) : null}
      <th scope="row">
        {standard_name} - {unit}
      </th>
      {loadedTimes.map((t, index_key) => {
        const t_index = response.domain.axes.t.values.indexOf(t)

        // empty cell if there isn't a value for the time
        if (t_index < 0) {
          return <td key={index_key} />
        }

        const value = response.ranges[l_var].values[t_index]
        return <td key={index_key}>{round(value as number)}</td>
      })}
    </tr>
  )
}

/**
 * Display Popover for HTML links
 * @param item STAC Item to display HTML links for
 * @returns
 */
const ItemInfo = ({ item }: { item: IItem }) => {
  const htmlLinks = item.links.filter((l) => l.extra_fields?.type === "text/html" && l.extra_fields?.title)
  return (
    <React.Fragment>
      {item.parent?.description ?? item.parent?.id ?? item.description ?? item.id}{" "}
      <OverlayTrigger
        overlay={
          <Popover>
            <Popover.Body>
              <ul style={{ paddingLeft: "1rem", textAlign: "left" }}>
                {htmlLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>{l.extra_fields?.title}</a>
                  </li>
                ))}
              </ul>
            </Popover.Body>
          </Popover>
        }
      >
        <FontAwesomeIcon icon={faInfoCircle} />
      </OverlayTrigger>
    </React.Fragment>
  )
}

/**
 * Draw the table heading. Times should be grouped by date
 * @param loadedTimes filtered, sorted list of times to display data from
 */
const TableHead = ({ loadedTimes }: { loadedTimes: string[] }) => {
  const dates = new Set(
    loadedTimes.map((t) => {
      const [date, time] = t.split("T")
      return date
    }),
  )

  return (
    <thead>
      <tr>
        <th colSpan={2} rowSpan={2} />
        {[...dates].map((d, i) => {
          return (
            <th
              key={d}
              colSpan={
                loadedTimes.filter((t) => {
                  const [date, time] = t.split("T")

                  return d === date
                }).length
              }
              style={{
                borderLeftWidth: i === 0 ? undefined : 1,
              }}
            >
              {d}
            </th>
          )
        })}
      </tr>
      <tr>
        {loadedTimes.map((t, i) => {
          const [date, time] = t.split("T")

          // Is this the first time for a day?
          const first =
            loadedTimes
              .filter((t) => {
                const [d, _] = t.split("T")
                return d === date
              })
              .indexOf(t) === 0

          return (
            <th
              key={t}
              style={{
                // Add a left border for the first time on a day
                // but not for the first day
                borderLeftWidth: first && i !== 0 ? 1 : undefined,
              }}
            >
              {time.split(":").slice(0, 2).join(":")}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

/**
 * Extract time values from EDR responses and
 * filter to only those unique time after the given date
 *
 * @param loaded EDR responses and data that has been loaded from STAC
 * @param after Time to filter loaded data to be displayed after
 * @returns
 */
function filterTimes(loaded: LoadedData[], after: Date) {
  let loadedTimes: string[] = []

  loaded.forEach((data, i) => {
    const values = data.response.domain.axes.t.values as string[]

    loadedTimes = [...loadedTimes, ...values]
  })

  loadedTimes = loadedTimes.sort((a, b) => {
    return new Date(a).valueOf() - new Date(b).valueOf()
  })

  // filter to unique times
  loadedTimes = [...new Set(loadedTimes)]

  // filter by times greater than an hour ago
  loadedTimes = loadedTimes.filter((t) => after.valueOf() < new Date(t).valueOf())
  return loadedTimes
}
