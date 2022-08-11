async function getContentByType(CONTENT_TYPE) {

  const SPACE_ID = "4qwitj0i1jgx";
  const ACCES_TOKEN = "6t903P8lOC4T3JMvGR4qg1xCLkbmeicOKvUFbhNY95I";

  const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCES_TOKEN}&content_type=${CONTENT_TYPE}`;
  const res = await fetch(url, {
    headers: {
      "content-type": "application/json"
    }
  });

  const json = await res.json();
  const imgList = json.includes.Asset;
  const itemList = json.items;

  return itemList.map(item => {

    const itemImg = imgList.find(img => {
      const itemImgID = item.fields.img.sys.id;
      const imgID = img.sys.id;
      return imgID === itemImgID;
    });

    const imgURL = itemImg.fields.file.url.slice(2);

    return {
      title: item.fields.title,
      imgURL: imgURL,
      description: item.fields.description,
      link: item.fields.link
    };
  });
}