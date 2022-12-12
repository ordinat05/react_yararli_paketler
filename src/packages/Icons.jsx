import React from 'react'
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { BiSearch, BiX, BiHome, BiMessageRoundedCheck, BiImageAdd, BiLayer, BiHeart, } from "react-icons/bi";
import { BsAlarm, BsApple, BsAlignCenter } from "react-icons/bs";
import { FaAmilia, FaAtlas, FaAdjust } from "react-icons/fa";
import { GoAlert, GoArrowBoth, GoArrowLeft, GoArrowRight, GoCalendar, GoChecklist } from "react-icons/go";
import { IconContext } from "react-icons";



function Icons() {
	return (
		<div style={{ backgroundColor: "yellow" }}>
			<IconContext.Provider value={{ color: "blue", size: "40", className: "global-class-name" }}>
				<div>
					<GoAlert /><GoArrowBoth /><GoArrowLeft /><GoArrowRight /><FaAdjust /><GoCalendar /><GoChecklist />
				</div>
			</IconContext.Provider>
			<h1 > This Component :  Icons.jsx</h1>
			{/* <FaBeer /> */}
			<BiSearch size="60" color="red" />
			<BiX size="60" color="red" />
			<BiHome size="60" color="red" />
			<BiMessageRoundedCheck size="60" color="red" />
			<BiImageAdd size="60" color="red" />
			<BiLayer size="60" color="red" />
			<BiHeart size="60" color="red" />
			<BsAlarm size="60" color="red" />
			<BsApple size="60" color="red" />
			<BsAlignCenter size="60" color="red" />
			<FaAmilia size="60" color="blue" />
			<FaAtlas size="60" color="blue" />
		</div >
	)
}

export default Icons
