import people from '../../starData/newPeople';
import films from '../../starData/newFilms';
import planets from '../../starData/newPlanets';
import starships from '../../starData/newStarships';
import vehicles from '../../starData/newVehicles';
import species from '../../starData/newSpecies';

const dataConfig = {
  people,
  films,
  planets,
  starships,
  vehicles,
  species
}

const getRouteName = (routePath) => {
  return routePath.split('/')[1];
}

export const mainController = (req, res) => {
  const routeName = getRouteName(req.path);
  const count = Number(req.query.count);
  const page = Number(req.query.page);
  if(count) {
    res.send(dataConfig[routeName].slice(0, count));
    return;
  }
  if(page) {
    const pageCount = Math.ceil(dataConfig[routeName].length / 9);
    if (page > pageCount) page = pageCount;
  
    res.send({
      page,
      pageCount,
      data: dataConfig[routeName].slice(page * 9 - 9, page * 9)
    })
    return;
  }
  res.send(dataConfig[routeName]);
};

export const getIdController = (req, res) => {
  const routeName = getRouteName(req.path);
  const ids =  req.params.id.split(',').map(Number);
  
  const data = dataConfig[routeName].filter(dataItem => {
    if(ids.indexOf(dataItem.id) !== -1) return true;
  });

  if(data.length > 0) {
    res.status(200).send(data);
  } else {
    res.status(404).send('Data not found');
  }
}