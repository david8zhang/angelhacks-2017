let markers = [
	{
		id: 0,
		latlng: {
			latitude: 37.78825,
      		longitude: -122.4324
		},
		title: 'this is a sample marker',
		description: '1 8 0 0 M A R K E D',
        joined: false
	},
    {
        id: 1,
        latlng: {
            longitude: -122.3226574856638,
            latitude: 37.55960021284216
        },
        title: 'Test Marker',
        description: 'A description for this marker would go here. blah bla text and stuff is really long wo so much text',
        joined: false
    },
    {
        id: 2,
        latlng: {
            longitude: -122.3426574856638,
            latitude: 37.55960021284216
        },
        title: 'Test Marker Two',
        description: 'Another description',
        joined: false
    }
];

let partners = [
    {
        id: 3,
        latlng: {
            longitude: -122.3126574856638,
            latitude: 37.56960021284216
        },
        title: 'Sponsored Marker',
        description: 'This is a sponsored marker.',
        company: 'Partner',
        link: 'http://www.breadfish.co.uk',
        joined: false
    }
];

let rooms = [
		{
            img: "https://f4.bcbits.com/img/0006688092_10.jpg",
            description: "There's a lot of trash where there should be beautiful nature",
            name: "Dirty beach"
        }, {
            img: "http://cdn.texasdisposalsys.netdna-cdn.com/sites/default/files/Interior_Hero_Landfill.jpg",
            description: "Clean up all this trash yo",
            name: "Lots of trash here"
        }, {
            img: "http://www.homedepot.com/catalog/productImages/400_compressed/d9/d97bfbf9-cf37-40d2-8fe2-6be3958eba6d_400_compressed.jpg",
            description: "Found some trash in this",
            name: "Trash found"
        }
];

export {
	markers,
	rooms,
    partners
};
