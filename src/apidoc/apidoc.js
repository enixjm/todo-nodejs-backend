/**
 * @api {get} /api/read/:user_id Read Task of a User
 * @apiName read
 * @apiGroup Task
 * @apiVersion 1.0.0
 * 
 * @apiParam {Number} user_id Task unique ID.
 * 
 * @apiSuccess {Number} id The Task-ID.
 * @apiSuccess {String} title 제목.
 * @apiSuccess {String} tag  태그.
 * @apiSuccess {Date} deadline  마감 기한.
 * @apiSuccess {Boolean} is_completed  마감 여부.
 * @apiSuccess {Boolean} is_important  중요 여부.
 * 
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 */

/** 
 * @api {post} /api/create Create Task of a User
 * @apiName create
 * @apiGroup Task
 * @apiVersion 1.0.0
 * 
 * @apiBody { Number } user_id 유저 아이디.
 * @apiBody { String } title 제목.
 * @apiBody { String } tag 태그.
 * @apiBody { Date } deadline 마감 기한.
 * @apiBody { Boolean } is_complated 마감 여부.
 * @apiBody { Boolean } is_important 중요 여부.
 * 
 * @apiError (400 Bad Request) InvalidRequest 유효하지 않은 요청
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
*/


/**
 * @api {delete} /api/delete/:id Delete task
 * @apiName delete
 * @apiGroup Task
 * @apiVersion 1.0.0
 * 
 * @apiParam {Number} id Task unique ID.
 */