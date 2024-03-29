import { Outlet } from "react-router-dom"
import { Tabs } from "antd"
import { CourseTabItem} from "../componet/TabItems"
import Header from "../../../components/Header"
import { CiStar } from "react-icons/ci"




export default function GroupHeader () {
   

    return<div className="">
      <Header text="Group and Course" icons={<CiStar/>}/>
    <div className=" mt-5">
 <Tabs
    defaultActiveKey="1"
    items={CourseTabItem}
    indicatorSize={(origin) => origin - 16}
  />

 <Outlet/>
 
    </div>

</div>
}