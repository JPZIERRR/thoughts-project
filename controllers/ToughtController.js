const Tought = require('../models/Tought');
const User = require('../models/User');

module.exports = class ToughtController {
  static async showToughts(req, res) {
    res.render('toughts/home');
  }

  static async dashboard(req, res) {
    const userId = req.session.userid;

    const user = await User.findOne({
      where: {
        id: userId,
      },
      include: Tought,
      plain: true,
    });

    if (!user) {
      res.redirect('/login');
    }

    const toughts = user.Toughts.map(result => result.dataValues);

    res.render('toughts/dashboard', { toughts });
  }

  static createToughts(req, res) {
    res.render('toughts/create');
  }

  static async createToughtsSave(req, res) {
    const tought = {
      title: req.body.title,
      UserId: req.session.userid,
    };

    try {
      await Tought.create(tought);

      req.flash('message', 'Pensamento criado com sucesso');

      req.session.save(() => {
        res.redirect('/toughts/dashboard');
      });
    } catch (err) {
      console.log(err);
    }
  }
};
