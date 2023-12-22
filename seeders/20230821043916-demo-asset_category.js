'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ('Asset_Categories', [
    {
      category_name: 'Kendaraan',
      category_code: 'C001',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      category_name: 'Mesin',
      category_code: 'C002',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Hardware',
      category_code: 'C003',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Software',
      category_code: 'C004',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Bangunan',
      category_code: 'C005',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Hak Cipta',
      category_code: 'C006',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Sains',
      category_code: 'C007',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Kesehatan',
      category_code: 'C008',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Bisnis',
      category_code: 'C009',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Otomotif',
      category_code: 'C0010',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Olahraga',
      category_code: 'C0011',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Hewan',
      category_code: 'C0012',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Keuangan',
      category_code: 'C0013',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Lingkungan',
      category_code: 'C0014',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Transportasi',
      category_code: 'C0015',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Musik',
      category_code: 'C0016',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Alat Electronic',
      category_code: 'C0017',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Pendidikan',
      category_code: 'C0018',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Makanan',
      category_code: 'C0019',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Minuman',
      category_code: 'C0020',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        category_name: 'Fashion',
        category_code: 'C0021',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Seni',
        category_code: 'C0022',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Teknologi',
        category_code: 'C0023',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Fotografi',
        category_code: 'C0024',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Desain',
        category_code: 'C0025',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Pariwisata',
        category_code: 'C0026',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Film',
        category_code: 'C0027',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Politik',
        category_code: 'C0028',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Gaya Hidup',
        category_code: 'C0029',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Sosial Media',
        category_code: 'C0030',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Robotik',
        category_code: 'C0031',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Gaming',
        category_code: 'C0032',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Kuliner',
        category_code: 'C0033',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Kesejahteraan',
        category_code: 'C0034',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Pertanian',
        category_code: 'C0035',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Pertukangan',
        category_code: 'C0036',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Kesenian',
        category_code: 'C0037',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Kedokteran',
        category_code: 'C0038',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Psikologi',
        category_code: 'C0039',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Astronomi',
        category_code: 'C0040',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
          category_name: 'Hobi',
          category_code: 'C0041',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Kecantikan',
          category_code: 'C0042',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Pendidikan Seni',
          category_code: 'C0043',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Kewirausahaan',
          category_code: 'C0044',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Teknik',
          category_code: 'C0045',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Kesejahteraan Anak',
          category_code: 'C0046',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Pekerjaan Sosial',
          category_code: 'C0047',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Keamanan',
          category_code: 'C0048',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Pertukangan Kayu',
          category_code: 'C0049',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Sains Komputer',
          category_code: 'C0050',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Desain Interior',
          category_code: 'C0051',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Edukasi Online',
          category_code: 'C0052',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Gaya Hidup Sehat',
          category_code: 'C0053',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Ekonomi',
          category_code: 'C0054',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Seni Pertunjukan',
          category_code: 'C0055',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Filsafat',
          category_code: 'C0056',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Hukum',
          category_code: 'C0057',
          createdAt: new Date(),
         updatedAt: new Date()
        },
        {
          category_name: 'Kerajinan',
          category_code: 'C0058',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Kesehatan Mental',
          category_code: 'C0059',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          category_name: 'Lingkungan Hidup',
          category_code: 'C0060',
          createdAt: new Date(),
          updatedAt: new Date()
        },
          {
            category_name: 'Sains Lingkungan',
            category_code: 'C0061',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Keuangan Pribadi',
            category_code: 'C0062',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Pengembangan Diri',
            category_code: 'C0063',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Desain Grafis',
            category_code: 'C0064',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Pertanian Organik',
            category_code: 'C0065',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Robotika Pendidikan',
            category_code: 'C0066',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Arsitektur',
            category_code: 'C0067',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Kehidupan Kota',
            category_code: 'C0068',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Teknologi Nuklir',
            category_code: 'C0069',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Kesehatan Anak',
            category_code: 'C0070',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Desain Mode',
            category_code: 'C0071',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Edukasi Musik',
            category_code: 'C0072',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Keamanan Cyber',
            category_code: 'C0073',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Kesehatan Wanita',
            category_code: 'C0074',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Pendidikan Sains',
            category_code: 'C0075',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Seni Digital',
            category_code: 'C0076',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Eksplorasi Luar Angkasa',
            category_code: 'C0077',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Pertanian Vertikal',
            category_code: 'C0078',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Kesehatan Mata',
            category_code: 'C0079',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            category_name: 'Kesehatan Jantung',
            category_code: 'C0080',
            createdAt: new Date(),
            updatedAt: new Date()
          },
        
  ],
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Asset_Categories', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};
