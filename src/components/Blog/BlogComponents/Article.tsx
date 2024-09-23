import ArticleImage from "./ArticleImage.tsx";
import ArticleList from "./ArticleList.tsx";

export default function Article(){
    return (
        <>
            <article>
                <p>Ah, mornings. That magical time when the world is still quiet, the sun peeks over the horizon, and
                    the coffee is brewing.
                    For me, it's more than just a beverage—it's a daily ritual. In this post, I’ll take you through my
                    perfect brew, from bean to cup.</p>


                <ArticleImage/>

                <h3>My Coffee Essentials:</h3>

                <ArticleList/>

                <div className="quote">
                    “Coffee is a language in itself.” — Jackie Chan
                </div>

                <p>Looking for more brewing tips? Check out <a
                    href="https://letmegooglethat.com/?q=More+coffee+brewing+tips" target="_blank">this awesome
                    guide</a> to making the perfect cup.</p>
            </article>
        </>
    )
}