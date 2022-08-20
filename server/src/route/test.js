const testRoute = [
  {
    method: 'get',
    route: '/test',
    handler: (req, res) => {
      res.send('WoW test Page is open')
    }
  }
]

export default testRoute;