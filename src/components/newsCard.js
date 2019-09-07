import React from 'react'
import { Link } from 'gatsby'

export default function NewsCard({image,title,body,id,slug}) {
    return (
    <div className="newscard" key={id}>
      <img src={image} width={418} sizes="(max-width: 479px) 100vw, (width: 100%) 81vw, 418px" alt="" className="image-3" />
        <div className="cardcontent">
          <h4 className="newshead">{title}</h4>
          <p className="newsp">{body}</p>
        </div>
        <Link to={`/blogpost/${slug}/`}className="newslink">Read more</Link>
    </div>
    )
}
