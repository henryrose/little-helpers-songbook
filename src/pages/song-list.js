import React from "react"
import YAMLData from "../../content/songs.yaml"

const SongList = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{YAMLData.title}</h1>
    <ul>
      {YAMLData.content.map((data, index) => {
        return <li key={`content_item_${index}`}><a href={data.item.songUrl}>{data.item.title}</a></li>
      })}
    </ul>
  </div>
)
export default SongList