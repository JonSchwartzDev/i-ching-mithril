var root = document.body;

var iChingSummary = [
    "The Eight Gates are elements of the Tao, representing fundamental energies or concepts: Earth, Mountain, Water, Wind, Thunder, Fire, Lake and Heaven. Each is represented by a trigram as shown above: three closed or open lines.",
    "The I Ching, or Classic of Changes, is an ancient Chinese divination text and the oldest of the Chinese classics, at 3000 years old.",
    "The hexagrams used for I Ching divination are a combination of two trigrams; this yields 64 possible combinations. Each combination is named, based on its trigams, and a 'judgment' is offered: a divinatory meaning. An 'image' is also offered, which tends to be more poetic and descriptive than judgmental or divinatory."
];

var TaoSummary = [
    "Tao or Dao is a Chinese word signifying 'way', 'path', 'route', 'key' or sometimes more loosely 'doctrine' or 'principle'.",
    "Within the context of traditional Chinese philosophy and religion, the Tao is the intuitive knowing of 'life' that cannot be grasped full-heartedly as just a concept but is known nonetheless through actual living experience of one's everyday being.",
    "The Tao differs from Western ontology in that it is an active and holistic practice of the natural order of Nature and its universal awakening, rather than a static, atomistic one.",
    "Laozi in the Tao Te Ching explains that the Tao is not a 'name' for a 'thing' but the underlying natural order of the Universe whose ultimate essence is difficult to circumscribe due to it being non conceptual yet evident' in one's being of aliveness."
]; 

var Trigrams = [
    "Earth",
    "Mountain",
    "Water",
    "Wind",
    "Thunder",
    "Fire",
    "Lake",
    "Heaven",
];

var TrigramNames = [
    "Kūn, or Earth",
    "Gèn, or Mountain",
    "Kǎn, or Water",
    "Xùn, or Wind",
    "Zhèn, or Thunder",
    "Lí, or Fire",
    "Duì, or Lake",
    "Qián, or Heaven"
];

var TrigramSummaries = [
[
    "Translation: The Receptive, Field",
    "Direction: Southwest",
    "Family: Mother",
    "Body part: Belly",
    "Attribute: Devoted, yielding",
    "State: Receptive",
    "Animal: Cow"
],
[
    "Translation: Keeping Still, Bound",
    "Direction: Northeast",
    "Family: Third son",
    "Body part: Hand",
    "Attribute: Resting, stand-still",
    "State: Completion",
    "Animal: Wolf or Dog"
],
[
    "Translation: The Abysmal, Gorge",
    "Direction: North",
    "Family: Second son",
    "Body part: Ear",
    "Attribute: Dangerous",
    "State: In motion",
    "Animal: Pig"
],
[
    "Translation: The Gentle, Ground",
    "Direction: Southeast",
    "Family: First daughter",
    "Body part: Thigh",
    "Attribute: Penetrating",
    "State: Gentle entrance",
    "Animal: Fowl"
],
[
    "Translation: The Arousing, Shake",
    "Direction: East",
    "Family: First son",
    "Body part: Foot",
    "Attribute: Inciting movement",
    "State: Initiative",
    "Animal: Dragon"
],
[
    "Translation: The Clinging, Radiance",
    "Direction: South",
    "Family: Second daughter",
    "Body part: Eye",
    "Attribute: light - giving, dependence",
    "State: Clinging, clarity, adaptable",
    "Animal: Pheasant"
],
[
    "Translation: The Joyous, Open",
    "Direction: West",
    "Family: Third daughter",
    "Body part: Mouth",
    "Attribute: Pleasure",
    "State: Tranquil (complete devotion)",
    "Animal: Sheep or Goat"
],
[
    "Translation: The Creative, Force",
    "Direction: Northwest",
    "Family: Father",
    "Body part: Head",
    "Attribute: Strong",
    "State: Creative",
    "Animal: Horse"
]];

var Combinations = [
    ["K'un - The Receptive",
        "Po - Splitting Apart",
        "Pi - Holding Together [Union]",
        "Kuan - Contemplation (View)",
        "Yu - Enthusiasm",
        "Chin - Progress",
        "Ts'ui - Gathering Together [Massing]",
        "P'i - Standstill [Stagnation]"
    ],
    ["Ch'ien - Modesty",
        "Kên - Keeping Still, Mountain",
        "Chien - Obstruction",
        "Chien - Development (Gradual Progress)",
        "Hsiao Kuo - Preponderance of the Small",
        "Lu - The Wanderer",
        "Hsien - Influence (Wooing)",
        "Tun - Retreat"
    ],
    ["Shih - The Army",
        "Mêng - Youthful Folly",
        "K'an - The Abysmal (Water)",
        "Huan - Dispersion [Dissolution]",
        "Hsieh - Deliverance",
        "Wei Chi - Before Completion",
        "K'un - Oppression (Exhaustion)",
        "Sung - Conflict"
    ],
    ["Shêng - Pushing Upward",
        "Ku - Work on What Has Been Spoiled [Decay]",
        "Ching - The Well",
        "Sun - The Gentle (The Penetrating, Wind)",
        "Hêng - Duration",
        "Ting - The Cauldron",
        "Ta Kuo - Preponderance of the Great",
        "Kou - Coming to Meet"
    ],
    ["Fu - Return (The Turning Point)",
        "I - The Corners of the Mouth (Providing Nourishment)",
        "Chun - Difficulty at the Beginning",
        "I - Increase",
        "Chên - The Arousing (Shock, Thunder)",
        "Shih Ho - Biting Through",
        "Sui - Following",
        "Wu Wang - Innocence (The Unexpected)"
    ],
    ["Ming I - Darkening of the Light",
        "Pi - Grace",
        "Chi Chi - After Completion",
        "Chia Jên - The Family [The Clan]",
        "Fêng - Abundance [Fullness]",
        "Li - The Clinging, Fire",
        "Ko - Revolution (Molting)",
        "T'ung Jên - Fellowship with Men"
    ],
    ["Lin - Approach",
        "Sun - Decrease",
        "Chieh - Limitation",
        "Chung Fu - Inner Truth",
        "Kuei Mei - The Marrying Maiden",
        "K'uei - Opposition",
        "Tui - The Joyous, Lake",
        "Lu - Treading [Conduct]"
    ],
    ["T'ai - Peace",
        "Ta Ch'u - The Taming Power of the Great",
        "Hsu - Waiting (Nourishment)",
        "Hsiao Ch'u - The Taming Power of the Small",
        "Ta Chuang - The Power of the Great",
        "Ta Yu - Possession in Great Measure",
        "Kuai - Break-through (Resoluteness)",
        "Ch'ien - The Creative"
    ]
];

var Judgments = [
    [
        [
            "The Receptive brings about sublime success,",
            "Furthering through the perseverance of a mare.",
            "If the superior man undertakes something and tries to lead, he goes astray.",
            "But if he follows, he finds guidance.",
            "It is favorable to find friends in the west and south,",
            "To forego friends in the east and north.",
            "Quiet perseverance brings good fortune."
        ],
        [
            "Splitting Apart.",
            "It does not further one",
            "To go anywhere."
        ],
        [
            "Holding Together brings good fortune.",
            "Inquire of the oracle once again",
            "Whether you possess sublimity, constancy, and perseverance;",
            "Then there is no blame.",
            "Those who are uncertain gradually join.",
            "Whoever comes too late",
            "Meets with misfortune."
        ],
        [
            "Contemplation.",
            "The ablution has been made,",
            "But not yet the offering.",
            "Full of trust they look up to him."
        ],
        [
            "Enthusiasm.",
            "It furthers one to install helpers",
            "And to set armies marching."
        ],
        [
            "Progress. The powerful prince",
            "Is honored with horses in large numbers.",
            "In a single day he is granted audience three times."
        ],
        [
            "Gathering Together. Success.",
            "The king approaches his temple.",
            "It furthers one to see the great man.",
            "This brings success.",
            "Perseverance furthers.",
            "To bring great offerings creates good fortune.",
            "It furthers one to undertake something."
        ],
        [
            "Standstill.",
            "Evil people do not further",
            "The perseverance of the superior man.",
            "The great departs;",
            "The small approaches."
        ],
    ],
    [
        [
            "Modesty creates success.",
            "The superior man carries things through."
        ],
        [
            "Keeping Still.",
            "Keeping his back still",
            "So that he no longer feels his body.",
            "He goes into his courtyard",
            "And does not see his people.",
            "No blame."
        ],
        [
            "Obstruction.",
            "The southwest furthers.",
            "The northeast does not further.",
            "It furthers one to see the great man.",
            "Perseverance brings good fortune."
        ],
        [
            "Development.",
            "The maiden is given in marriage.",
            "Good fortune.",
            "Perseverance furthers."
        ],
        [
            "Preponderance of the Small.",
            "Success.",
            "Perseverance furthers.",
            "Small things may be done;",
            "Great things should not be done.",
            "The flying bird brings the message:",
            "It is not well to strive upward,",
            "It is well to remain below.",
            "Great good fortune."
        ],
        [
            "The Wanderer.",
            "Success through smallness.",
            "Perseverance brings good fortune",
            "To the wanderer."
        ],
        [
            "Influence. Success.",
            "Perseverance furthers.",
            "To take a maiden to wife brings good fortune."
        ],
        [
            "Retreat. Success.",
            "In what is small, perseverance furthers."
        ],
    ],
    [
        [
            "The army needs perseverance",
            "And a strong man.",
            "Good fortune without blame."
        ],
        [
            "Youthful Folly has success.",
            "It is not I who seek the young fool;",
            "The young fool seeks me.",
            "At the first oracle I inform him.",
            "If he asks two or three times, it is importunity.",
            "If he importunes, I give him no information.",
            "Perseverance furthers."
        ],
        [
            "The Abysmal repeated.",
            "If you are sincere, you have success in your heart,",
            "And whatever you do succeeds."
        ],
        [
            "Dispersion. Success.",
            "The king approaches his temple.",
            "It furthers one to cross the great water.",
            "Perseverance furthers."
        ],
        [
            "Deliverance.",
            "The southwest furthers.",
            "If there is no longer anything where one has to go,",
            "Return brings good fortune.",
            "If there is still something where one has to go,",
            "Hastening brings good fortune."
        ],
        [
            "Before Completion. Success.",
            "But if the little fox, after nearly completing the crossing,",
            "Gets his tail in the water,",
            "There is nothing that would further."
        ],
        [
            "Oppression. Success. Perseverance.",
            "The great man brings about good fortune.",
            "No blame.",
            "When one has something to say,",
            "It is not believed."
        ],
        [
            "Conflict. You are sincere",
            "And are being obstructed.",
            "A cautious halt halfway brings good fortune.",
            "Going through to the end brings misfortune.",
            "It furthers one to see the great man.",
            "It does not further one to cross the great water."
        ]
    ],
    [
        [
            "Pushing Upward has supreme success.",
            "One must see the great man.",
            "Fear not.",
            "Departure toward the south",
            "Brings good fortune."
        ],
        [
            "Work on What Has Been Spoiled",
            "Has supreme success.",
            "It furthers one to cross the great water.",
            "Before the starting point, three days.",
            "After the starting point, three days."
        ],
        [
            "The Well.",
            "The town may be changed,",
            "But the well cannot be changed.",
            "It neither decreases nor increases.",
            "They come and go and draw from the well.",
            "If one gets down almost to the water",
            "And the rope does not go all the way,",
            "Or the jug breaks, it brings misfortune.",
        ],
        [
            "The Gentle.",
            "Success through what is small.",
            "It furthers one to have somewhere to go.",
            "It furthers one to see the great man."
        ],
        [
            "Duration. Success. No blame.",
            "Perseverance furthers.",
            "It furthers one to have somewhere to go."
        ],
        [
            "The Cauldron.",
            "Supreme good fortune.",
            "Success.",
        ],
        [
            "Preponderance of the Great.",
            "The ridgepole sags to the breaking point.",
            "It furthers one to have somewhere to go.",
            "Success."
        ],
        [
            "Coming to Meet.",
            "The maiden is powerful.",
            "One should not marry such a maiden."
        ]
    ],
    [
        [
            "Return. Success.",
            "Going out and coming in without error.",
            "Friends come without blame.",
            "To and fro goes the way.",
            "On the seventh day comes return.",
            "It furthers one to have somewhere to go."
        ],
        [
            "The Corners of the Mouth.",
            "Perseverance brings good fortune.",
            "Pay heed to the providing of nourishment",
            "And to what a man seeks",
            "To fill his own mouth with."
        ],
        [
            "Difficulty at the Beginning works supreme success,",
            "Furthering through perseverance.",
            "Nothing should be undertaken.",
            "It furthers one to appoint helpers."
        ],
        [
            "Increase.",
            "It furthers one to undertake something.",
            "It furthers one to cross the great water."
        ],
        [
            "Shock brings success.",
            "Shock comes: oh, oh!",
            "Laughing words: ha, ha!",
            "The shock terrifies for a hundred miles,",
            "And he does not let fall the sacrificial spoon and chalice."
        ],
        [
            "Biting Through has success.",
            "It is favorable to let justice be administered."
        ],
        [
            "Following has supreme success.",
            "Perseverance furthers. No blame."
        ],
        [
            "Innocence. Supreme success.",
            "Perseverance furthers.",
            "If someone is not as he should be,",
            "He has misfortune,",
            "And it does not further him",
            "To undertake anything."
        ]
    ],
    [
        [
            "Darkening of the Light.",
            "In adversity it furthers one",
            "To be persevering."
        ],
        [
            "Grace has success.",
            "In small matters",
            "It is favorable",
            "To undertake something."
        ],
        [
            "After Completion.",
            "Success in small matters.",
            "Perseverance furthers.",
            "At the beginning good fortune.",
            "At the end disorder."
        ],
        [
            "The Family.",
            "The perseverance of the woman furthers."
        ],
        [
            "Abundance has success.",
            "The king attains abundance.",
            "Be not sad.",
            "Be like the sun at midday."
        ],
        [
            "The Clinging.",
            "Perseverance furthers.",
            "It brings success.",
            "Care of the cow brings good fortune."
        ],
        [
            "Revolution.",
            "On your own day",
            "You are believed.",
            "Supreme success,",
            "Furthering through perseverance.",
            "Remorse disappears."
        ],
        [
            "Fellowship with Men in the open.",
            "Success.",
            "It furthers one to cross the great water.",
            "The perseverance of the superior man furthers."
        ]
    ],
    [
        [
            "Approach has supreme success.",
            "Perseverance furthers.",
            "When the eighth month comes,",
            "There will be misfortune."
        ],
        [
            "Decrease combined with sincerity",
            "Brings about supreme good fortune",
            "Without blame.",
            "One may be persevering in this.",
            "It furthers one to undertake something.",
            "How is this to be carried out?",
            "One may use two small bowls for the sacrifice."
        ],
        [
            "Limitation. Success.",
            "Galling limitation must not be persevered in."
        ],
        [
            "Inner Truth.",
            "Pigs and fishes.",
            "Good fortune.",
            "It furthers one to cross the great water.",
            "Perseverance furthers."
        ],
        [
            "The Marrying Maiden.",
            "Undertakings bring misfortune.",
            "Nothing that would further."
        ],
        [
            "Opposition.",
            "In small matters,",
            "Good fortune."
        ],
        [
            "The Joyous. Success.",
            "Perseverance is favorable."
        ],
        [
            "Treading upon the tail of the tiger.",
            "It does not bite the man.",
            "Success."
        ],
    ],
    [
        [
            "Peace.",
            "The small departs,",
            "The great approaches.",
            "Good fortune. Success."
        ],
        [
            "The Taming Power of the Great.",
            "Perseverance furthers.",
            "Not eating at home brings good fortune.",
            "It furthers one to cross the great water."
        ],
        [
            "Waiting. If you are sincere,",
            "You have light and success.",
            "Perseverance brings good fortune.",
            "It furthers one to cross the great water."
        ],
        [
            "The Taming Power of the Small",
            "Has success.",
            "Dense clouds, no rain from our western region."
        ],
        [
            "The Power of the Great.",
            "Perseverance furthers."
        ],
        [
            "Possession in Great Measure.",
            "Supreme success."
        ],
        [
            "Breakthrough.",
            "One must resolutely make the matter known",
            "At the court of the king.",
            "It must be announced truthfully.",
            "Danger.",
            "It is necessary to notify one's own city.",
            "It does not further to resort to arms.",
            "It furthers one to undertake something."
        ],
        [
            "The Creative works sublime success,",
            "Furthering through perseverance."
        ]
    ]
];

var Images = [
    [
        [
            "The earth's condition is receptive devotion.",
            "Thus the superior man who has breadth of character",
            "Carries the outer world."
        ],
        [
            "The mountain rests on the earth:",
            "The image of Splitting Apart.",
            "Thus those above can ensure their position",
            "Only by giving generously to those below."
        ],
        [
            "On the earth is water:",
            "The image of Holding Together.",
            "Thus the kings of antiquity",
            "Bestowed the different states as fiefs",
            "And cultivated friendly relations",
            "With the feudal lords."
        ],
        [
            "The wind blows over the earth:",
            "The image of Contemplation.",
            "Thus the kings of old visited the regions of the world,",
            "Contemplated the people,",
            "And gave them instruction."
        ],
        [
            "Thunder comes resounding out of the earth:",
            "The image of Enthusiasm.",
            "Thus the ancient kings made music",
            "In order to honor merit,",
            "And offered it with splendor",
            "To the Supreme Deity,",
            "Inviting their ancestors to be present."
        ],
        [
            "The sun rises over the earth:",
            "The image of Progress.",
            "Thus the superior man himself",
            "Brightens his bright virtue."
        ],
        [
            "Over the earth, the lake:",
            "The image of Gathering Together.",
            "Thus the superior man renews his weapons",
            "In order to meet the unforseen."
        ],
        [
            "Heaven and earth do not unite:",
            "The image of Standstill.",
            "Thus the superior man falls back upon his inner worth",
            "In order to escape the difficulties.",
            "He does not permit himself to be honored with revenue."
        ]
    ],
    [
        [
            "Within the earth, a mountain:",
            "The image of Modesty.",
            "Thus the superior man reduces that which is too much,",
            "And augments that which is too little.",
            "He weighs things and makes them equal."
        ],
        [
            "Mountains standing close together:",
            "The image of Keeping Still.",
            "Thus the superior man",
            "Does not permit his thoughts",
            "To go beyond his situation."
        ],
        [
            "Water on the mountain:",
            "The image of Obstruction.",
            "Thus the superior man turns his attention to himself",
            "And molds his character."
        ],
        [
            "On the mountain, a tree:",
            "The image of Development.",
            "Thus the superior man abides in dignity and virtue,",
            "In order to improve the mores."
        ],
        [
            "Thunder on the mountain:",
            "The image of Preponderance of the Small.",
            "Thus in his conduct the superior man gives preponderance to reverence.",
            "In bereavement he gives preponderance to grief.",
            "In his expenditures he gives preponderance to thrift."
        ],
        [
            "Fire on the mountain:",
            "The image of the Wanderer.",
            "Thus the superior man",
            "Is clear-minded and cautious",
            "In imposing penalties,",
            "And protracts no lawsuits."
        ],
        [
            "A lake on the mountain:",
            "The image of Influence.",
            "Thus the superior man encourages people to approach him",
            "By his readiness to receive them."
        ],
        [
            "Mountain under heaven:",
            "The image of Retreat.",
            "Thus the superior man keeps the inferior man at a distance,",
            "Not angrily but with reserve."
        ]
    ],
    [
        [
            "In the middle of the earth is water:",
            "The image of the Army.",
            "Thus the superior man increases his masses",
            "By generosity toward the people."
        ],
        [
            "A spring wells up at the foot of the mountain:",
            "The image of Youth.",
            "Thus the superior man fosters his character",
            "By thoroughness in all that he does."
        ],
        [
            "Water flows on uninterruptedly and reaches its goal:",
            "The image of the Abysmal repeated.",
            "Thus the superior man walks in lasting virtue",
            "And carries on the business of teaching."
        ],
        [
            "The wind drives over the water:",
            "The image of Dispersion.",
            "Thus the kings of old sacrificed to the Lord",
            "And built temples."
        ],
        [
            "Thunder and rain set in:",
            "The image of Deliverance.",
            "Thus the superior man pardons mistakes",
            "And forgives misdeeds."
        ],
        [
            "Fire over water:",
            "The image of the condition before transition.",
            "Thus the superior man is careful",
            "In the differentiation of things,",
            "So that each finds its place."
        ],
        [
            "There is no water in the lake:",
            "The image of Exhaustion.",
            "Thus the superior man stakes his life",
            "On following his will."
        ],
        [
            "Heaven and water go their opposite ways:",
            "The image of Conflict.",
            "Thus in all transactions",
            "The superior man",
            "Carefully considers the beginning."
        ]
    ],
    [
        [
            "Within the earth, wood grows:",
            "The image of Pushing Upward.",
            "Thus the superior man of devoted character",
            "Heaps up small things",
            "In order to achieve something high and great."
        ],
        [
            "The wind blows low on the mountain:",
            "The image of Decay.",
            "Thus the superior man stirs up the people",
            "And strengthens their spirit."
        ],
        [
            "Water over wood:",
            "The image of the Well.",
            "Thus the superior man encourages the people at their work,",
            "And exhorts them to help one another."
        ],
        [
            "Winds following one upon the other:",
            "The image of the Gently Penetrating.",
            "Thus the superior man",
            "Spreads his commands abroad",
            "And carries out his undertakings."
        ],
        [
            "Thunder and wind:",
            "The image of Duration.",
            "Thus the superior man stands firm",
            "And does not change his direction."
        ],
        [
            "Fire over wood:",
            "The image of the Cauldron.",
            "Thus the superior man consolidates his fate",
            "By making his position correct."
        ],
        [
            "The lake rises above the trees:",
            "The image of Preponderance of the Great.",
            "Thus the superior man, when he stands alone,",
            "Is unconcerned,",
            "And if he has to renounce the world,",
            "He is undaunted."
        ],
        [
            "Under heaven, wind:",
            "The image of Coming to Meet.",
            "Thus does the prince act when disseminating his commands",
            "And proclaiming them to the four quarters of heaven."
        ]
    ],
    [
        [
            "Thunder within the earth:",
            "The image of the Turning Point.",
            "Thus the kings of antiquity closed the passes",
            "At the time of solstice.",
            "Merchants and strangers did not go about,",
            "And the ruler",
            "Did not travel through the provinces."
        ],
        [
            "At the foot of the mountain, thunder:",
            "The image of Providing Nourishment.",
            "Thus the superior man is careful of his words",
            "And temperate in eating and drinking."
        ],
        [
            "Clouds and thunder:",
            "The image of Difficulty at the Beginning.",
            "Thus the superior man",
            "Brings order out of confusion."
        ],
        [
            "Wind and thunder:",
            "The image of Increase.",
            "Thus the superior man:",
            "If he sees good, he imitates it;",
            "If he has faults, he rids himself of them."
        ],
        [
            "Thunder repeated:",
            "The image of Shock.",
            "Thus in fear and trembling",
            "The superior man sets his life in order",
            "And examines himself."
        ],
        [
            "Thunder and lightning:",
            "The image of Biting Through.",
            "Thus the kings of former times made firm the laws",
            "Through clearly defined penalties."
        ],
        [
            "Thunder in the middle of the lake:",
            "The image of Following.",
            "Thus the superior man at nightfall",
            "Goes indoors for rest and recuperation."
        ],
        [
            "Under heaven thunder rolls:",
            "All things attain the natural state of innocence.",
            "Thus the kings of old,",
            "Rich in virtue, and in harmony with the time,",
            "Fostered and nourished all beings."
        ]
    ],
    [
        [
            "The light has sunk into the earth:",
            "The image of Darkening of the Light.",
            "Thus does the superior man live with the great mass:",
            "He veils his light, yet still shines."
        ],
        [
            "Fire at the foot of the mountain:",
            "The image of Grace.",
            "Thus does the superior man proceed",
            "When clearing up current affairs.",
            "But he dare not decide controversial",
            "Issues in this way."
        ],
        [
            "Water over fire:",
            "The image of the condition",
            "In After Completion.",
            "Thus the superior man",
            "Takes thought of misfortune",
            "And arms himself against it in advance."
        ],
        [
            "Wind comes forth from fire:",
            "The image of the Family.",
            "Thus the superior man has substance in his words",
            "And duration in his way of life.",
        ],
        [
            "Both thunder and lightning come:",
            "The image of Abundance.",
            "Thus the superior man decides lawsuits",
            "And carries out punishments."
        ],
        [
            "That which is bright rises twice:",
            "The image of Fire.",
            "Thus the great man, by perpetuating this brightness,",
            "Illumines the four quarters of the world."
        ],
        [
            "Fire in the lake:",
            "The image of Revolution.",
            "Thus the superior man",
            "Sets the calendar in order",
            "And makes the seasons clear."
        ],
        [
            "Heaven together with fire:",
            "The image of Fellowship with Men.",
            "Thus the superior man organizes the clans",
            "And makes distinctions between things."
        ]
    ],
    [
        [
            "The earth above the lake:",
            "The image of Approach.",
            "Thus the superior man is inexhaustible",
            "In his will to teach,",
            "And without limits",
            "In his tolerance and protection of the people."
        ],
        [
            "At the foot of the mountain, the lake:",
            "The image of Decrease.",
            "Thus the superior man controls his anger",
            "And restrains his instincts."
        ],
        [
            "Water over lake:",
            "The image of Limitation.",
            "Thus the superior man",
            "Creates number and measure,",
            "And examines the nature of virtue and correct conduct."
        ],
        [
            "Wind over lake:",
            "The image of Inner Truth.",
            "Thus the superior man discusses criminal cases",
            "In order to delay executions."
        ],
        [
            "Thunder over the lake:",
            "The image of the Marrying Maiden.",
            "Thus the superior man",
            "Understands the transitory",
            "In the light of the eternity of the end."
        ],
        [
            "Above, fire; below, the lake:",
            "The image of Opposition.",
            "Thus amid all fellowship",
            "The superior man retains his individuality."
        ],
        [
            "Lakes resting one on the other:",
            "The image of the Joyous.",
            "Thus the superior man joins with his friends",
            "For discussion and practice."
        ],
        [
            "Heaven above, the lake below:",
            "The image of Treading.",
            "Thus the superior man discriminates between high and low,",
            "And thereby fortifies the thinking of the people."
        ]
    ],
    [
        [
            "Heaven and earth unite:",
            "The image of Peace.",
            "Thus the Ruler",
            "Divides and completes the course of heaven and earth;",
            "He furthers and regulates the gifts of heaven and earth,",
            "And so aids the people."
        ],
        [
            "Heaven within the mountain:",
            "The image of the Taming Power of the Great.",
            "Thus the superior man acquaints himself with many sayings of antiquity",
            "And many deeds of the past,",
            "In order to strengthen his character thereby."
        ],
        [
            "Clouds rise up to heaven:",
            "The image of Waiting.",
            "Thus the superior man eats and drinks,",
            "Is joyous and of good cheer.",
        ],
        [
            "The wind drives across heaven:",
            "The image of the Taming Power of the Small.",
            "Thus the superior man",
            "Refines the outward aspect of his nature."
        ],
        [
            "Thunder in heaven above:",
            "The image of the Power of the Great.",
            "Thus the superior man does not tread upon paths",
            "That do not accord with established order."
        ],
        [
            "Fire in heaven above:",
            "The image of Possession in Great Measure.",
            "Thus the superior man curbs evil and furthers good,",
            "And thereby obeys the benevolent will of heaven."
        ],
        [
            "The lake has risen up to heaven:",
            "The image of Breakthrough.",
            "Thus the superior man",
            "Dispenses riches downward",
            "And refrains from resting on his virtue."
        ],
        [
            "The movement of heaven is full of power.",
            "Thus the superior man makes himself strong and untiring."
        ]
    ]
];

var Hexagram = {
    view: function (vnode) {
        var above = Trigrams[vnode.attrs.above];
        var below = Trigrams[vnode.attrs.below];
        var nextabove = parseInt(vnode.attrs.above);
        var nextbelow = parseInt(vnode.attrs.below) + 1;
        if (nextbelow == 8) { nextbelow = 0; nextabove += 1 };
        if (nextabove == 8) { nextabove = 0; }
        var next = nextabove + "/" + nextbelow;
        return m("div", [
            m(NavMenu),
            m("div.nextbutton", { onclick: function () { m.route.set("/hexagram/" + next) } }, "›"),
            m(RandomButton),
            m("div.clear"),
            m("div.col-2.trigram." + above),
            m("div.h2.col-2", { style: "auto" }, above),
            m("div.col-2.trigram." + below),
            m("div.h2.col-2", below),
            m("div.h3.col-2", Combinations[vnode.attrs.below][vnode.attrs.above]),
            Judgments[vnode.attrs.below][vnode.attrs.above].map(function (line) { return m("div.line.col-2", line) }),
            m("div.h3.col-2", "The image"),
            Images[vnode.attrs.below][vnode.attrs.above].map(function (line) { return m("div.line.col-2", line) })
        ])}
}

var Trigram = {
    view: function (vnode) {
        var next = parseInt(vnode.attrs.trigram) + 1;
        if (next == 8) { next = 0 };
        return m("div",
                [
                    m(NavMenu),
                    m(RandomButton),
                    m("div.clear"),
                    m("div.nextbutton", { onclick: function () { m.route.set("/trigram/" + next) } }, "›"),
                    m("div.clear"),
                    m("div.col-2.trigram." + Trigrams[vnode.attrs.trigram]),
                    m("div.h2.col-2", { style: "auto" }, TrigramNames[vnode.attrs.trigram]),
                    TrigramSummaries[vnode.attrs.trigram].map(function (line) { return m("div.spacedline.narrow.col-2", line) } )
            ])}
}

var IChing = {
    view: function (vnode) {
        return m("div",
            [
                m(NavMenu),
                m(RandomButton),
                m("div.col-2.iching"),
                m("div.h2.col-2", { style: "auto" }, "The I Ching"),
                iChingSummary.map(function (line) { return m("div.spacedline.col-2", line) })
            ])}
}

var Tao = {
    view: function (vnode) {
        return m("div",
            [
                m(NavMenu),
                m(RandomButton),
                m("div.col-2.tao"),
                m("div.h2.col-2", { style: "auto" }, "The Tao"),
                TaoSummary.map(function (line) { return m("div.spacedline.col-2", line) })            
            ])}
}

var RandomButton = {
    view: function (vnode) {
        above = Math.floor(Math.random() * 8);
        below = Math.floor(Math.random() * 8);
        return  m("#randombutton", { onclick: function () { m.route.set("/hexagram/" + above + "/" + below) } })
    }
}

var NavMenu = {
    view: function(vnode) {
        return m("div", [
                m("#sidenavbutton", {
                onclick: (e) => {
                    document.getElementById("sidenav").style.width = "150px";
                        }
                    }),
                m('#sidenav', [
                    m(".sidenavmenuitem.header", "About"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/tao") } }, "The Tao"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/iching") } }, "I Ching"),
                    m(".sidenavmenuitem.header", "Trigrams"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/trigram/0") } }, "Earth"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/trigram/1") } }, "Mountain"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/trigram/2") } }, "Water"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/trigram/3") } }, "Wind"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/trigram/4") } }, "Thunder"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/trigram/5") } }, "Fire"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/trigram/6") } }, "Lake"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/trigram/7") } }, "Heaven"),
                    m(".sidenavmenuitem.header", "Hexagrams"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/hexagram/0/0") } }, "First"),
                    m(".sidenavmenuitem.clickable", { onclick: function () { m.route.set("/hexagram/" + above + "/" + below) } }, "Random"),
                    m(".sidenavmenuitem.header.clickable", { onclick: function () { document.getElementById("sidenav").style.width = "0"; } }, "Hide Menu")
                ])
            ])
    }
}

m.route(root, "/tao", {
    "/hexagram/:above/:below": Hexagram,
    "/tao": Tao,
    "/iching": IChing,
    "/trigram/:trigram": Trigram
})
