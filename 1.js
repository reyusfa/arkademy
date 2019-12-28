function getBiodata(name = '', age = 0) {
  let obj = {
    name: name,
    age: age,
    address: 'Jogosuran RT 03 RW 05, Danukusuman, Serengan, Surakarta',
    hobbies: [
      'Browsing/Social Media',
      'Bermain Game',
      'Menonton Streaming Film/Kartun',
      'Membaca Komik',
    ],
    is_married: false,
    list_school: [
      {
        name: 'SMK Negeri 2 Surakarta',
        year_in: 2012,
        year_out: 2015,
        major: 'Rekayasa Perangkat Lunak',
      },
      {
        name: 'SMP Negeri 19 Surakarta',
        year_in: 2009,
        year_out: 2012,
        major: null,
      },
      {
        name: 'SD Muhammadiyah 14 Surakarta',
        year_in: 2003,
        year_out: 2009,
        major: null,
      },
    ],
    skills: [
      {
        skill_name: 'HTML',
        level: 'advanced',
      },
      {
        skill_name: 'CSS',
        level: 'advanced',
      },
      {
        skill_name: 'Javascript',
        level: 'advanced',
      },
      {
        skill_name: 'PHP',
        level: 'advanced',
      },
      {
        skill_name: 'Cloud Computing (AWS, Azure)',
        level: 'beginner',
      },
      {
        skill_name: 'Bahasa Inggris Pasif',
        level: 'advanced',
      },
    ],
    interest_in_coding: true,
  }
  
  return obj;
}


// console log output
console.log(getBiodata('Yusuf Aryanto', 23));
