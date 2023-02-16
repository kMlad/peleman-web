const VideoHeroBlockQuery = `
... on ComponentBlocksVideoHero {
    video {
      data {
        attributes {
          name
          alternativeText
          caption
          width
          height
          formats
          hash
          url
          previewUrl
        }
      }
    }
    mobileVideo {
      data {
        attributes {
          name
          alternativeText
          caption
          width
          height
          formats
          hash
          url
          previewUrl
        }
      }
    }
  }
`

export default VideoHeroBlockQuery;