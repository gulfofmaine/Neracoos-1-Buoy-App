import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"
import { useEffect, useState } from "react"
import { Dropdown, DropdownMenu, DropdownToggle, NavLink } from "reactstrap"

export const WaterLevelSensorSelector = ({ platforms }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sensorOptions, setSensorOptions] = useState()

  const close = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (platforms) {
      const options = platforms.map((p, index) => {
        const link = urlPartReplacer(paths.waterLevel.sensor, ":id", p.id as string)
        return (
          <NavLink key={index} href={link} onClick={() => close()}>
            {p.id}
          </NavLink>
        )
      })
      setSensorOptions(options)
    }
  }, [platforms])

  return (
    <Dropdown nav={true} inNavbar={true} isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
      <DropdownToggle nav={true} caret={true}>
        Sensors
      </DropdownToggle>

      {sensorOptions && <DropdownMenu end={true}>{sensorOptions}</DropdownMenu>}
    </Dropdown>
  )
}
