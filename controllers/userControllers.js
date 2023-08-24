import User from '../models/User';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 데이터베이스에 이메일이 있는지 체크
    let user = await User.findOne({ email });

    // 이메일이 있으면 에러 코드 반환
    if (user) {
      return res.status(400).json({ message: '이미 존재하는 이메일입니다.' });
    }

    // 이메일이 없다면, 데이터베이스에 새로운 유저 생성
    user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      token: await user.generateJWT(),
    });
  } catch (error) {
    return res.status(500).json({ message: '회원가입에 실패했습니다.' });
  }
};

export { registerUser };
