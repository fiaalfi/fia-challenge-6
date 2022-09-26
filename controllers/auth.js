const UsersPost = require('../modules/modules');

exports.userData = (req, res, next) => {
  const nama = req.body.nama;
  const email = req.body.email;
  const password = req.body.password;

  const Posting = new UsersPost({
    nama,
    email,
    password
  })

  Posting.save()
    .then(result => {
      res.status(201).json({
        message : "User Berhasil Terdaftar!",
        data : result
      });
    })
    .catch(err => console.log('error : ' + err))
}

exports.users = (req, res, next) => {
  UsersPost.find()
    .then(result => {
      res.status(200).json({
        message: "Data Users Berhasil Diambil!",
        data: result
      })
    })
    .catch(err => next(err))
}

exports.user = (req, res, next) => {
  const userId = req.params.getId;
  UsersPost.findById(userId)
    .then(result => {
      if(!result){
        const error = new Error('Data User Tidak Ditemukan!');
        error.errorStatus(404);
        throw error;
      }
      res.status(200).json({
        message: "Data User Berhasil Dipanggil",
        data: result
      })
    })
    .catch(err => next(err))
}

exports.userEdit = (req, res, next) => {
  const nama = req.body.nama;
  const email = req.body.email;
  const password = req.body.password;

  const userId = req.params.getId;

  UsersPost.findById(userId)
    .then(result => {
      if(!result){
        const error = new Error('Data Users Tidak Ditemukan!');
        error.errorStatus(404);
        throw error;
      }

      result.nama = nama;
      result.email = email;
      result.password = password;

      return result.save();
    })
    .then(result => {   
      res.status(200).json({
        message: "Data Users Berhasil Diupdate",
        data: result
      })
    })
    .catch(err => next(err))


}

exports.userDelete = (req, res, next) => {
  const userId = req.params.getId;
  UsersPost.findById(userId)
    .then(result => {
      if(!result){
        const error = new Error('Data User Tidak Ditemukan!');
        error.errorStatus(404);
        throw error;
      }
      return UsersPost.findByIdAndRemove(userId)
    })
    .then(result => {      
      res.status(200).json({
        message: "Data User Berhasil Dihapus",
        data: result
      })
    })
    .catch(err => next(err))
}