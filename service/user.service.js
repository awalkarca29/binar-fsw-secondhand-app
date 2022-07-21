const bcrypt = require("bcrypt");
const jwtUtil = require("../util/jwt.util.js");
const cloudinaryConfig = require("../config/cloudinary.config.js");
const userRepository = require("../repository/user.repository.js");

exports.createUser = async (payload) => {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(payload.fields.password, salt);

  const user = {
    name: payload.fields.name,
    email: payload.fields.email,
    password: encryptedPassword,
  };

  if (user != null) {
    return await userRepository.save(user);
  } else {
    return null;
  }
};

exports.loginUser = async (payload) => {
  const user = await userRepository.findByEmail(payload.fields.email);

  if (user != null) {
    const checkPassword = await bcrypt.compare(
      payload.fields.password,
      user.password
    );

    if (checkPassword) {
      return user;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

exports.currentUser = async (req) => {
  const token = req.headers.authorization.substring(
    7,
    req.headers.authorization.length
  );
  const decodedToken = await jwtUtil.decodeToken(token);
  const user = await userRepository.findById(decodedToken.id);

  console.log(`User id detected is`, decodedToken.id);

  return user;
};

exports.updateUser = async (payload, id) => {
  try {
    const uploadProfile = await cloudinaryConfig.uploader.upload(
      payload.files.image.path
    );

    const user = {
      name: payload.fields.name,
      address: payload.fields.address,
      city: payload.fields.city,
      phone: payload.fields.phone,
      image: uploadProfile.secure_url,
    };

    const userById = await userRepository.findById(id);

    if (userById == null) {
      return null;
    } else {
      return await userRepository.update(user, id);
    }
  } catch (err) {
    console.error(err);
  }
};
