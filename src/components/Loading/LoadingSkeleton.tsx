import Image from "next/image"

import neracoosLogo from "../NavBar/neracoos_logo.png"
import { NavbarBrand } from "reactstrap"
import { paths } from "Shared/constants"

export const LoadingSkeleton = () => {
  return (
    <div className="loading-container" style={{}}>
      <NavbarBrand href={paths.neracoos}>
        <Image src={neracoosLogo} alt="NERACOOS" height={30} className="loading-logo" />
      </NavbarBrand>
    </div>
  )
}
