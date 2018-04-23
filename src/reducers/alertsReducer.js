//Makes the alerts reducer
const alertsReducer = (state={alerts: []}, action) => {
  if (action.type == 'DISMISS') {
    var obj = state.alerts.slice();
    obj.splice(action.idx, 1);
    return Object.assign({}, state, { alerts: obj })
  }
  else if (action.error != null) {
    var obj = state.alerts.slice();
    obj.push({alertType: 'error', message: action.message});
    return Object.assign({}, state, { alerts: obj })
  }
  else if (action.message) {
    var obj = state.alerts.slice();
    obj.alerts.push({alertType: 'info', message: action.message});
    return Object.assign({}, state, { alerts: obj })
  }
  return state;
}

export default alertsReducer;
