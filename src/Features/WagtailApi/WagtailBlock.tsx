import * as React from "react"
import { connect } from "react-redux"
import { Alert } from "reactstrap"
import { bindActionCreators, Dispatch } from "redux"

import ContentBlock from "components/ContentBlock"

import * as actions from "./actions"

import { StoreState } from "Shared/constants/store"
import { WagtailPage } from "./constants"

export interface Props {
  /** Wagtail API page number to load */
  pageId: string
}

export interface ReduxProps {
  loadPage: (pageId: string) => void
  pages: WagtailPage[]
}

function mapStateToProps({ wagtail }: StoreState) {
  return {
    pages: wagtail.pages
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadPage: actions.wagtailLoadContent
    },
    dispatch
  )

export class WagtailBlockBase extends React.Component<Props & ReduxProps, object> {
  public render() {
    const filtered = this.props.pages.filter(page => page.pageId === this.props.pageId)

    if (filtered.length < 1) {
      this.props.loadPage(this.props.pageId)
      return <Alert color="primary">Loading content...</Alert>
    } else {
      const page = filtered[0]
      return <ContentBlock content={page.content.body} />
    }
  }
}

export const WagtailBlock = connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(WagtailBlockBase)
