import SectionPerfectBrew from "./SectionPerfectBrew.tsx";
import Article from "./Article.tsx";
import DailyArticle from "./DailyArticle.tsx";
import listsOfArticle, {ListsOfArticle} from "../../../assets/listsOfArticle.ts";

export default function Body(){
    return (
        <div>
            <SectionPerfectBrew/>
            <Article/>
            {listsOfArticle.map((list:ListsOfArticle) =>
                <DailyArticle key={list.date} date={list.date} title={list.title} article={list.article} />) }
        </div>
    )
}