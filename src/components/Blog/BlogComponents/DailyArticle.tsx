
export type DailyArticleProps = {
    date: string,
    title: string,
    article: string

}


export default function DailyArticle({date, title, article}:DailyArticleProps){
    return (
       <>
       <h4>{date}</h4>
           <h6>{title}</h6>
           <article>{article}</article>
       </>
    )
}