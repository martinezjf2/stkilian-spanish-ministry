import React from "react";
import MiniJumbo from "@/components/global/MiniJumbo";
import ComingSoon from "@/components/global/ComingSoon";

export default function Alter() {
    return <>
        <MiniJumbo
                  images={[
                    "/images/jovenes/jovenes.jpg",
                    "/images/jovenes/jovenes2.jpg",
                    "/images/jovenes/jovenes3.jpg",
                    "/images/jovenes/jovenes4.jpg",
                    "/images/jovenes/jovenes5.jpg",
                    "/images/jovenes/jovenes6.jpg",
                  ]}
                />
    <ComingSoon name="Alter Servants" />
    <div>Here would go a form with different options of what and where does the individual want to participate within the Alter, could be monagios, eucharist,</div>
    </>
}