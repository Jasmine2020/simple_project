import axios from 'axios'

const getCode = async () => {
  let result = ''
  try {
    result = await axios.get('/demo')
    if (result.status === 200) {
      return result.data
    }
  } catch (e) {
    console.log(e)
  }
}

const forgetPassword = async (option) => {
  let result = ''
  try {
    result = await axios.post('/forget', {
      ...option
    })
    if (result.status === 200) {
      return result.data
    }
  } catch (e) {
    console.log(e)
  }
}

export { getCode, forgetPassword }