async function loadModel(){ 
              model = await tf.loadModel('https://hkinsley.com/static/tfjsmodel/model.json')

  
              y = model.predict(tf.zeros([1,2])) 
              document.getElementById('out').innerHTML = y.dataSync()[0] 
          } 
          loadModel() 
