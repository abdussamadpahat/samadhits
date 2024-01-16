const router = new require("express").Router()
const media = require("./media")
const imageRouter = require("./imageRouter")

router.use("/v1/media", media)
router.use("/image", imageRouter)

module.exports = router