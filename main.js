//
new Vue({
  el: '#app',
  data: {
      name: '',
      cource: '',
      acceptance_period: '',
      default_last_id: 1,
      students:
      [
        // { id: 1, name: '野呂浩良', cource: '機械学習コース', acceptance_period: '2019年01月期' },
        // { id: 2, name: '富永修司', cource: 'Webエンジニアコース', acceptance_period: '2017年11月期' },
        // { id: 3, name: '斉藤一起', cource: 'Webエンジニアコース', acceptance_period: '2017年11月期' }
      ]},
      methods: {
        addStudent: function(){
          this.students.push({
            id: this.default_last_id++,
            name: this.name,
            cource: this.cource ,
            acceptance_period: this.acceptance_period
          })
      }
    }
  })
