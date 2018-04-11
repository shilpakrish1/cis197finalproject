'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: html  structure will  look like
// <nav class="navbar navbar-expand-sm  navbar-light bg-light">
//  <a class="navbar-brand" href="#">Twitter for BORDS</a>
//  <ul class="navbar-nav">
//    ...navigation items
//  </ul>
// </nav>
// for each of the navigation items, the code is the following
// <li className="nav-item">
//  <Link className="nav-link" to="/feed">
//    Feed
//  </Link>
// </li>
//
// if the user is logged in (how do we check for that given we are
// connected to the isAuthenticated route?)
// render out links for feed, edit profile my profile, and logout
// else
// just render out links for signup/in (coresponging to the /signx route)

var NavBar = function (_Component) {
  _inherits(NavBar, _Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));
  }

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {
      if (this.props.isAuthenticated) {
        return _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-expand-sm navbar-light bg-light' },
          _react2.default.createElement(
            'a',
            { className: 'navbar-brand', href: '#' },
            'Twitter for Birds'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'navbar-nav' },
            _react2.default.createElement(
              'li',
              { className: 'nav-item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'nav-link', to: '/feed' },
                'Feed'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav-item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'nav-link', to: '/edit-profile' },
                'Edit Profile'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav-item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'nav-link', to: '/profile' },
                'My Profile'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav-item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'nav-link', to: '/logout' },
                'Logout'
              )
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-expand-sm navbar-light bg-light' },
          _react2.default.createElement(
            'a',
            { className: 'navbar-brand', href: '#' },
            'Twitter for Birds'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'navbar-nav' },
            _react2.default.createElement(
              'li',
              { className: 'nav-item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'nav-link', to: '/signx' },
                'Sign-in'
              )
            )
          )
        );
      }
    }
  }]);

  return NavBar;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var authReducer = state.authReducer;

  return authReducer;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(NavBar);