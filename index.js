import express from 'express';
import { read } from '../../../day1/class/json-cards/json-module/jsonFileStorage.js';

const app = express();

const PORT = 3000;

const whenIncomingRequest = (req, res) => {
  console.log('request came in');

  read('data.json', (data, err) => {
    if (err) {
      console.log('read error', err);
    }

    console.log('done with reading');

    const { index } = req.params;
    console.log(index);

    if (data.recipes[index]) {
      res.send(data.recipes[index]);
    } else {
      res.status(404).send('Sorry, we cannot find that!');
    }
  });
};

const whenIncomingRequestYield = (req, res) => {
  console.log('request came in');

  read('data.json', (data, err) => {
    if (err) {
      console.log('read error', err);
    }

    const yield1 = req.params.yield;
    console.log(yield1);
    console.log(data.recipes[1].yield);
    console.log(data.recipes.length);
    const result = [];
    for (let i = 0; i < data.recipes.length; i += 1) {
      if (data.recipes[i].yield == yield1) {
        result.push(data.recipes[i]);
        console.log(result);
      }
    }
    res.send(result);
  });
};

const whenIncomingRequestLabel = (req, res) => {
  console.log('request came in');

  read('data.json', (data, err) => {
    if (err) {
      console.log('read error', err);
    }

    const { label } = req.params;
    console.log(label);
    label.split(' ');
    label

      .res.send('hello');
  });
};

app.get('/recipe-label/:label', whenIncomingRequestLabel);
app.get('/yield/:yield', whenIncomingRequestYield);
app.get('/recipe/:index', whenIncomingRequest);
app.listen(PORT);
// const whenIncomingRequest = (request, response) => {
//   console.log('request came in');

//   // read the JSON file
//   read('data.json', (data, error) => {
//     // send back data in the response
//     console.log('done with reading');

//     // we specified this at app.get
//     const { index } = request.params;

//     if (data.recipes[index]) {
//     // send back the single name we asked for

//       response.send(data.recipes[index]);
//     } else {
//       response.status(404).send('Sorry, we cannot find that!');
//     }
//   });
// };

// const whenRequestAll = (req, resp) => {
//   console.log('request came in');

//   read('data.json', (content) => {
//     console.log('done with reading');
//     resp.send(content);
//   });
// };

// app.get('/recipes', whenRequestAll);
// // get one of the things in the data array
// app.get('/yield/:yield', whenIncomingRequest);

// app.listen(PORT);
