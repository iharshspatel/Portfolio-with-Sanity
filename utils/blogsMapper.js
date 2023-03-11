import dateFormatter from "./dateFormatter"

function blogMapper(data){
    return data.map((post)=>{
        return {
        'date': dateFormatter(post.publishedAt),
        'title':post.title,
        'description':post.description,
        'slug':post.slug.current
        }
    })

}

export default blogMapper