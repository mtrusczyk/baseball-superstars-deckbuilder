import create from 'zustand';
import { getSkillLevelDiff } from '../util';

const useSkillState = create((set, get) => ({
  skills: {},
  tempSkills: null,
  skillDiff: {},
  setState: (object) => set(() => object),
  setTempSkills: (value) =>
    set(() => ({
      tempSkills: value,
      skillDiff: value !== null ? getSkillLevelDiff(value, get().skills) : null,
    })),
}));

export default useSkillState;
