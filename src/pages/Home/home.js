import FeaturedInfo from "../../component/featuredInfo/featuredInfo";
import "./home.css";
import Chart from '../../component/chart/chart' 
import { userData } from '../../dummyData';
import WidgetSm from "../../component/widgetSm/widgetSm";
import WidgetLg from "../../component/widgetLg/widgetLg";

export default function Home(){
    return(
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetLg />
                <WidgetSm />
            </div>
        </div>
    )
}