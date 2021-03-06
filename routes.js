const routes = require('next-routes')();


routes.add('/', '/index')
      .add('/index','/index')
      .add('/dVote/index', '/dVote/index')
      .add('/dVote/vote/:mb_addr/:address', '/dVote/vote')
      .add('/dVote/status/:mb_addr/:address', '/dVote/status')
      .add('/dVote/admin/:mb_addr/:address', '/dVote/admin')
      .add('/dVote/home/:mb_addr', '/dVote/home')
      .add('/dResume/index', '/dResume/index')
      .add('/dResume/certificates/:address/success', '/dResume/certificates/success')
      .add('/dResume/certificates/:address/transcript', '/dResume/certificates/transcript')
      .add('/dResume/school/index', '/dResume/school/index')
      .add('/dResume/school/upload/login', '/dResume/school/upload/login')
      .add('/dResume/school/upload/:address/index', '/dResume/school/upload/index')
      .add('/dResume/school/upload/:address/students', '/dResume/school/upload/students')
      .add('/dResume/school/cancel/login', '/dResume/school/cancel/login')
      .add('/dResume/school/cancel/:address/index', '/dResume/school/cancel/index')
      .add('/dResume/ministry/login', '/dResume/ministry/login')
      .add('/dResume/ministry/:address/index', '/dResume/ministry/index')
      .add('/dResume/ministry/:address/schoolList', '/dResume/ministry/schoolList')
      .add('/dResume/verifyPage/index', '/dResume/verifyPage/index')
      .add('/dResume/verifyPage/verifyCertificate', '/dResume/verifyPage/verifyCert')
      .add('/Eid/', '/Eid/index')
      .add('/Eid/index', '/Eid/index')
      .add('/Eid/List','/Eid/List/index')
      .add('/Eid/List/index','/Eid/List/index')
      .add('/Eid/List/CreateSingleEntity', '/Eid/List/CreateSingleEntity')
      .add('/Eid/List/CreateMultipleEntity', '/Eid/List/CreateMultipleEntity')
      .add('/Eid/storage/index', '/Eid/storage/index')
      .add('/Eid/storage/:address', '/Eid/storage/storage')
      .add('/Eid/sendPage/index', '/Eid/sendPage/index')
      .add('/Eid/sendPage/:address', '/Eid/sendPage/show')
      .add('/Eid/sendPage/:address/:index/edit', '/Eid/sendPage/edit')
      .add('/Eid/receivePage/index', '/Eid/receivePage/index')
      .add('/Eid/receivePage/:address', '/Eid/receivePage/show')
      .add('/dNews/index', '/dNews/index')
      .add('/dNews/journalist/editor/LoginPage', '/dNews/journalist/editor/LoginPage')
      .add('/dNews/journalist/editor/:address/:media/EditorReq', '/dNews/journalist/editor/EditorReq')
      .add('/dNews/journalist/editor/:address/EditorList/:index', '/dNews/journalist/editor/EditorList')
      .add('/dNews/journalist/editor/:address/EditorList/:index/:state', '/dNews/journalist/editor/EditorList')
      .add('/dNews/journalist/editor/ChildInfo', '/dNews/journalist/editor/ChildInfo')
      .add('/dNews/journalist/editor/:address/:address2/ChildShow/:type', '/dNews/journalist/editor/ChildShow')
      .add('/dNews/journalist/owner/LoginPage', '/dNews/journalist/owner/LoginPage')
      .add('/dNews/journalist/owner/:address/OwnerReq', '/dNews/journalist/owner/OwnerReq')
      .add('/dNews/journalist/owner/:address/QueryChildShow', '/dNews/journalist/owner/QueryChildShow')
      .add('/dNews/ReadingPage/newsList', '/dNews/ReadingPage/newsList')
      .add('/dNews/journalist/owner/Pd/:address/:index', '/dNews/journalist/owner/Pd')
      .add('/dNews/journalist/owner/Attest/:address/:address2', '/dNews/journalist/owner/Attest')
      ;

module.exports = routes;