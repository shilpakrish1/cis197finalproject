'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TweetList = require('./TweetList');

var _TweetList2 = _interopRequireDefault(_TweetList);

var _ProfileBox = require('./ProfileBox');

var _ProfileBox2 = _interopRequireDefault(_ProfileBox);

var _CreateTweetBox = require('./CreateTweetBox');

var _CreateTweetBox2 = _interopRequireDefault(_CreateTweetBox);

var _tweetActions = require('../actions/tweetActions');

var _profileActions = require('../actions/profileActions');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.match.params.id) {
        return _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h2',
            null,
            ' Profile '
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-4' },
              _react2.default.createElement(_ProfileBox2.default, {
                id: function id() {
                  return _this2.props.loadProfileTweets(_this2.props.match.params.id);
                },
                user: function user() {
                  return _this2.props.getUser(_this2.props.match.params.id);
                },
                favUnfav: function favUnfav() {
                  return _this2.props.favUnfav(_this2.props.match.params.id);
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-8' },
              _react2.default.createElement(_CreateTweetBox2.default, null),
              _react2.default.createElement(_TweetList2.default, { loadTweets: function loadTweets() {
                  return _this2.props.loadProfileTweets(_this2.props.match.params.id);
                } })
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h2',
            null,
            ' Profile '
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-4' },
              _react2.default.createElement(_ProfileBox2.default, {
                id: function id() {
                  return _this2.props.loadProfileTweets(_this2.props.match.params.id);
                },
                user: function user() {
                  return _this2.props.getUser(_this2.props.match.params.id);
                },
                favUnfav: function favUnfav() {
                  return _this2.props.favUnfav(_this2.props.match.params.id);
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-8' },
              _react2.default.createElement(_TweetList2.default, { loadTweets: function loadTweets() {
                  return _this2.props.loadProfileTweets(_this2.props.match.params.id);
                } })
            )
          )
        );
      }
    }
  }]);

  return Profile;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadProfileTweets: function loadProfileTweets(id) {
      return dispatch((0, _tweetActions.loadTweetsForProfile)(id));
    },
    favUnfav: function favUnfav(id) {
      return dispatch((0, _profileActions.favUnfav)(id));
    },
    getUser: function getUser(id) {
      return dispatch((0, _profileActions.getUser)(id));
    }
  };
};
// optionally use this to handle assigning dispatch actions to props


exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Profile);