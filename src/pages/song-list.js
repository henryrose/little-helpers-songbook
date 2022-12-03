import React from "react"
import YAMLData from "../../content/songs.yaml"

const SongList = () => (
  <div style={{ maxWidth: `960px`, margin: `` }}>
    <h1>{YAMLData.title}</h1>
    <ul style={{listStyleType: "none", padding: 0}}>
      {YAMLData.content.map((data, index) => {
        return <li 
                key={`content_item_${index}`} 
                style={{
                  padding: `8px 0`
                }}
                ><a href={data.item.songUrl}>{data.item.title}</a></li>
      })}
    </ul>
  </div>
)
export default SongList