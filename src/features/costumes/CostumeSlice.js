import { COSTUMES } from '../../app/shared/COSTUMES';

// export const selectAllCampsites = () => {
//     return CAMPSITES;
// };

// // export const selectRandomCampsite = () => {
// //     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// // };

// export const selectCampsiteById = (id) => {
//     return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
// };

export const selectJazzCostumes = () => {
    return  COSTUMES.filter(costume => costume.style === 'jazz')
};

export const selectLyricalCostumes = () => {
    return COSTUMES.filter(costume => costume.style === 'lyrical')
};

export const selectTapCostumes = () => {
    return COSTUMES.filter(costume => costume.style === 'tap')
};

export const selectBalletCostumes = () => {
    return COSTUMES.filter(costume => costume.style === 'ballet')
};

export const selectMusicalTheaterCostumes = () => {
    return COSTUMES.filter(costume => costume.style === 'musicaltheater')
};

export const selectHipHopCostumes = () => {
    return COSTUMES.filter(costume => costume.style === 'hiphop')
};

export const selectSoloCostumes = () => {
    return COSTUMES.filter(costume => costume.style === 'solo')
};
