export type ListsOfArticle = {
    date: string,
    title: string,
    article: string
}


const articles: ListsOfArticle[] = [{
        date: "23. Dezember 2023",
        title: "Der Tag vor Heilig Abend",
        article: "Der Tag vor Heiligabend, auch als Weihnachtsabend oder 23. " +
            "Dezember bekannt, ist eine Zeit der Vorfreude, an dem letzte Vorbereitungen " +
            "für das Weihnachtsfest getroffen werden."
    },
    {
        date: "24. Dezember 2023",
        title: "Heilig Abend",
        article: "An Heiligabend warten die Kinder voller Aufregung und Vorfreude auf die " +
            "Bescherung, während sie gespannt auf das Christkind oder den Weihnachtsmann hoffen."
    },
    {
        date: "25. Dezember 2023",
        title: "1. Weihnachtsfeiertag",
        article: "Alle sind verkatert und noch komplett voll gefressen!"}
]

export default articles