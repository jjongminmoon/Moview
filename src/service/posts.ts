const simplePostProjection = `
  ...,
  "username": author->username,
  "userImage": author->image,
  "image": photo,
  "likes": like[]->username,
  "text": conmments[0].comment,
  "comments": conut(comments),
  "id":_id,
  "createdAt":_createdAt
`;
