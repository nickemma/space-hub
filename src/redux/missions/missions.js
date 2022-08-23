const ADD_MISSIONS = 'space-hub/missions/ADD_MISSION';
const COMPLETE_STATUS = 'space-hub/missions/COMPLETE_STATUS';
const JOIN_MISSION = 'space-hub/missions/JOIN_MISSION';
const CANCEL_MISSION = 'space-hub/missions/CANCEL_MISSION';

const initialState = {
  data: [],
  status: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSIONS:
      return { ...state, data: [...state.data, ...action.payload] };
    case COMPLETE_STATUS:
      return { ...state, status: 'completed' };
    case JOIN_MISSION: {
      const newState = state.data.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
      return { ...state, data: [...newState] };
    }
    case CANCEL_MISSION: {
      const newState = state.data.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: false };
      });
      return { ...state, data: [...newState] };
    }
    default:
      return state;
  }
};

export default reducer;

const addMissions = (missionsItems) => ({
  type: ADD_MISSIONS,
  payload: missionsItems,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});
export const cancelMission = (id) => ({
  type: CANCEL_MISSION,
  id,
});

const completeStatus = () => ({
  type: COMPLETE_STATUS,
});

export { addMissions, completeStatus };

const getMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  console.log(data);
  const missionsItems = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  dispatch(addMissions(missionsItems));
  dispatch(completeStatus());
};

export { getMissions };
