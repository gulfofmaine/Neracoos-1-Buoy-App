import Image from "next/image"

import neracoosLogo from "../NavBar/neracoos_logo.png"
import { NavbarBrand } from "reactstrap"
import { paths } from "Shared/constants"

export const LoadingSkeleton = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "250",
        backgroundColor: "grey",
        opacity: ".5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      \{" "}
      <NavbarBrand href={paths.neracoos}>
        <Image src={neracoosLogo} alt="NERACOOS" height={30} />
      </NavbarBrand>
    </div>
  )
}
