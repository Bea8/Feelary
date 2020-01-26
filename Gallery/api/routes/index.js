var express = require('express');
var router = express.Router();



const unsplash = new Unsplash({
  accessKey: "{0ffad22b3609551f9d589da5e0443953c37b5851658b075b04aa143031a580df}",
  // Optionally you can also configure a custom header to be sent with every request
  headers: {
    "X-Custom-Header": "foo"
  },
  // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
  timeout: 500 // values set in ms
});


router.get('/api/photos', function(req, res, next) {
  const page = req.query.page || 1;
  const take = req.query.take || 30;
  unsplash.photos.listPhotos(page, take, "computers")
  .then(toJson)
  .then(photos => {

    return res.json(photos)
  })
});





module.exports = router;
