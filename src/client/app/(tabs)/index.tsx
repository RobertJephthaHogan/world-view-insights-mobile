import { Dimensions, FlatList, Modal, Pressable, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useMemo, useState } from 'react';








export default function TabOneScreen() {

	const [category, setCategory] = useState<string>('all')
	const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);
	//const [displayData, setDisplayData] = useState<any[]>(mockNewsData)


	const displayData = useMemo(() => {
		if (category === 'all') {
			return mockNewsData
		} else {
			return mockNewsData.filter((entry:any) => entry.type === category)
		}
	}, [category])


	const handleCategoryButtonPress = (value: string) => {
		console.log(`${value} Pressed`);
		setCategory(value)
	};

	const renderItem = ({ item }: any) => (
        <Pressable 
			style={({ pressed }) => [
				styles.itemContainer,
				pressed && styles.pressedItemContainer
			]}
            onPress={() => {
                setSelectedItem(item);
                setModalVisible(true);
            }}
        >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.date}>{new Date(item.publicationDate).toLocaleDateString()}</Text>
        </Pressable>
    );

	return (
		<View style={styles.container}>
			<ScrollView 
				horizontal={true} 
				showsHorizontalScrollIndicator={true}
				style={styles.scrollview}
			>
				<View style={styles.categoryBar}>
					<Pressable 
						style={({ pressed }) => [
							styles.button,
							pressed && styles.pressedButton
						]}
						onPress={() => handleCategoryButtonPress('all')}
					>
						<Text style={styles.buttonText}>
							All News
						</Text>
					</Pressable>
					<Pressable 
						style={({ pressed }) => [
							styles.button,
							pressed && styles.pressedButton
						]}
						onPress={() => handleCategoryButtonPress('business')}
					>
						<Text style={styles.buttonText}>
							Market News
						</Text>
					</Pressable>
					<Pressable 
						style={({ pressed }) => [
							styles.button,
							pressed && styles.pressedButton
						]}
						onPress={() => handleCategoryButtonPress('tech')}
					>
						<Text style={styles.buttonText}>
							Tech News
						</Text>
					</Pressable>
					<Pressable 
						style={({ pressed }) => [
							styles.button,
							pressed && styles.pressedButton
						]}
						onPress={() => handleCategoryButtonPress('politics')}
					>
						<Text style={styles.buttonText}>
							Political News
						</Text>
					</Pressable>
					
				</View>
			</ScrollView>
			<View style={styles.body}>
				<FlatList
					data={displayData}
					renderItem={renderItem}
					keyExtractor={item => item.id}
				/>

			</View>
			<Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
					<View style={styles.modalView}>
						<ScrollView style={styles.scrollView}>
						{selectedItem && (
                            <>
                                <Text style={styles.articleTitle}>{selectedItem.title}</Text>
                                <Text style={styles.articleByline}>
                                    Published on {new Date(selectedItem.publicationDate).toLocaleDateString()}
                                    {selectedItem.authors && ` | By ${selectedItem.authors.join(', ')}`}
                                </Text>
                                <Text style={styles.articleContent}>{selectedItem.description}</Text>
								<Text style={styles.articleContent}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur orci, at aliquet metus. Fusce a ex pretium, ultrices ante quis, blandit leo. 
									{/* ... More article content ... */}
								</Text>
                            </>
                        )}
							<Pressable
								style={styles.buttonClose}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>
									Back To News Feed
								</Text>
							</Pressable>
						</ScrollView>
					</View>
				</View>
            </Modal>
		</View>
	);
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
  	},
	scrollview: {
		maxHeight: 80
	},
  	categoryBar: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		maxHeight: 80,
		paddingVertical: 10
  	},
  	button: {
		backgroundColor: '#007bff',
		paddingVertical: 8, 
		paddingHorizontal: 16, 
		marginHorizontal: 5, 
		borderRadius: 5,
		height: 40, 
	},
	pressedButton: {
        backgroundColor: '#0056b3', // Darker shade when pressed
        opacity: 0.8, // Slightly transparent when pressed
    },
	buttonText: {
		color: 'white', 
		fontWeight: 'bold',
	},
	body: {
		flex: 1,
	},
	itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
	pressedItemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
		backgroundColor: "#f1f1f1"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: 'gray',
    },
    date: {
        fontSize: 12,
        color: '#888',
    },
	centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
		height: screenHeight * 0.7,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
		marginTop: 30
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    scrollView: {
        marginHorizontal: 20,
    },
    articleTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    articleByline: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 12,
    },
    articleContent: {
        fontSize: 18,
        color: 'black',
		paddingTop: 20
    },

});







const mockNewsData = [
    {
        "id": "b2311b5f-e4ef-4183-a9b5-33585c2742f0",
        "title": "Technology Advancements",
        "description": "New developments in the political arena.",
        "link": "https://example.com/article/0",
        "publicationDate": "2022-03-25T02:12:10",
        "authors": [
            "Author A",
            "Author B"
        ],
        "guid": "571b35aa-b7ec-4d4f-9c6c-8969ba129908",
        "systemId": "System1",
        "type": "tech"
    },
    {
        "id": "269c3c17-faf1-4140-84d2-612bbe0be1ac",
        "title": "Market Update",
        "description": "Recent market trends and insights.",
        "link": "https://example.com/article/1",
        "publicationDate": "2020-06-01T14:24:38",
        "authors": [
            "Author A"
        ],
        "guid": "4cf5f5af-8c87-4a4c-8a4a-e7a9ac493afb",
        "systemId": "System3",
        "type": "politics"
    },
    {
        "id": "2e6f8f56-55c5-4557-92b2-fbffe46073e0",
        "title": "Market Update",
        "description": "Recent market trends and insights.",
        "link": "https://example.com/article/2",
        "publicationDate": "2021-11-16T14:28:39",
        "authors": [
            "Author B"
        ],
        "guid": "4182edee-5cd1-4424-ae10-a9d4e05aaf01",
        "systemId": "System2",
        "type": "business"
    },
    {
        "id": "19bbd27a-6b2c-423e-a23f-8903cd99b278",
        "title": "Global Events",
        "description": "Latest updates in world events.",
        "link": "https://example.com/article/3",
        "publicationDate": "2022-07-24T17:39:46",
        "authors": [
            "Author C",
            "Author B",
            "Author D"
        ],
        "guid": "291d139b-d47e-49e0-8220-af5f80e28109",
        "systemId": "System2",
        "type": "business"
    },
    {
        "id": "c266661d-8b03-4c50-b122-684c22ff1db0",
        "title": "Market Update",
        "description": "Recent market trends and insights.",
        "link": "https://example.com/article/4",
        "publicationDate": "2022-01-25T18:54:00",
        "authors": [
            "Author B",
            "Author D",
            "Author C",
            "Author A"
        ],
        "guid": "852a8220-ccef-407d-8ea4-7a4f3c530199",
        "systemId": "System3",
        "type": "politics"
    },
    {
        "id": "ba1ac630-8166-4024-9d70-7ac945ea02ab",
        "title": "Market Update",
        "description": "Recent market trends and insights.",
        "link": "https://example.com/article/5",
        "publicationDate": "2021-02-23T07:31:45",
        "authors": [
            "Author D",
            "Author B",
            "Author C"
        ],
        "guid": "bf16e867-c649-42ad-84d7-93345a438ad1",
        "systemId": "System1",
        "type": "business"
    },
    {
        "id": "42c05d49-4631-40c0-b604-9cb178db2bd9",
        "title": "Market Update",
        "description": "New developments in the political arena.",
        "link": "https://example.com/article/6",
        "publicationDate": "2023-10-11T09:06:03",
        "authors": [
            "Author C",
            "Author A"
        ],
        "guid": "1f34ec98-0b23-4e05-967b-39733861d07b",
        "systemId": "System2",
        "type": "tech"
    },
    {
        "id": "cae3d043-9ce8-4dae-89cd-ace06d349444",
        "title": "Breaking News",
        "description": "New developments in the political arena.",
        "link": "https://example.com/article/7",
        "publicationDate": "2020-01-02T02:35:25",
        "authors": [
            "Author B"
        ],
        "guid": "be288cb5-19ba-40a5-934f-247c617e4d1c",
        "systemId": "System1",
        "type": "politics"
    },
    {
        "id": "7e395eaa-4abb-449a-875f-e798fa4aac3b",
        "title": "Breaking News",
        "description": "Significant global events of the day.",
        "link": "https://example.com/article/8",
        "publicationDate": "2022-08-30T01:31:58",
        "authors": [
            "Author C",
            "Author B",
            "Author D"
        ],
        "guid": "7f7e921d-ffe3-4d6f-9053-c1c01c11d9a2",
        "systemId": "System3",
        "type": "politics"
    },
    {
        "id": "1d8ca1f5-28dc-4dcc-bc4d-5dd6e5bb912a",
        "title": "Technology Advancements",
        "description": "Recent market trends and insights.",
        "link": "https://example.com/article/9",
        "publicationDate": "2020-10-10T21:27:25",
        "authors": [
            "Author A",
            "Author C",
            "Author D"
        ],
        "guid": "6ad55bfc-b416-4342-b005-152e72079f5e",
        "systemId": "System2",
        "type": "tech"
    },
    {
        "id": "726b15a6-cb46-4aa6-a3a6-0e2a01e3f5e5",
        "title": "Market Update",
        "description": "Latest updates in world events.",
        "link": "https://example.com/article/10",
        "publicationDate": "2023-12-30T03:10:53",
        "authors": [
            "Author A",
            "Author D",
            "Author B"
        ],
        "guid": "0f548230-1fd3-475e-be69-d910950b8558",
        "systemId": "System3",
        "type": "tech"
    },
    {
        "id": "a3eb31af-e016-4747-a157-42fdef0a2a0a",
        "title": "Technology Advancements",
        "description": "Latest updates in world events.",
        "link": "https://example.com/article/11",
        "publicationDate": "2022-04-26T17:36:19",
        "authors": [
            "Author A",
            "Author D",
            "Author B",
            "Author C"
        ],
        "guid": "b561e0fd-273e-4845-9d2a-84d4a2b22164",
        "systemId": "System2",
        "type": "politics"
    },
    {
        "id": "f56a3a21-9454-4e12-87e6-edc6aa8c08a1",
        "title": "Global Events",
        "description": "New developments in the political arena.",
        "link": "https://example.com/article/12",
        "publicationDate": "2020-06-01T20:07:53",
        "authors": [
            "Author C",
            "Author B",
            "Author D"
        ],
        "guid": "f0175f4a-958e-4d0a-9e9d-4bc02aab7ef0",
        "systemId": "System3",
        "type": "tech"
    },
    {
        "id": "1abd2793-eefd-4c67-b177-25871f0a9992",
        "title": "Global Events",
        "description": "New developments in the political arena.",
        "link": "https://example.com/article/13",
        "publicationDate": "2023-06-10T19:36:56",
        "authors": [
            "Author B"
        ],
        "guid": "8376f52a-8ab4-4bf3-9227-fec746a6f7e5",
        "systemId": "System3",
        "type": "politics"
    },
    {
        "id": "5d838275-99c0-4e87-9ad1-b9595fab7153",
        "title": "Political Insight",
        "description": "Latest breakthroughs in technology.",
        "link": "https://example.com/article/14",
        "publicationDate": "2021-01-07T05:43:27",
        "authors": [
            "Author D",
            "Author A"
        ],
        "guid": "3998e547-abe8-40cc-a718-e670745c6aed",
        "systemId": "System2",
        "type": "tech"
    },
    {
        "id": "2300bafc-cf44-4d26-90d6-c6477c71a560",
        "title": "Global Events",
        "description": "Significant global events of the day.",
        "link": "https://example.com/article/15",
        "publicationDate": "2021-07-12T20:37:34",
        "authors": [
            "Author C",
            "Author A",
            "Author B",
            "Author D"
        ],
        "guid": "317b9aac-d451-4ab2-9d8b-647a7d441d1a",
        "systemId": "System3",
        "type": "politics"
    },
    {
        "id": "96049620-1f9a-4575-851a-c778a4660b23",
        "title": "Market Update",
        "description": "Recent market trends and insights.",
        "link": "https://example.com/article/16",
        "publicationDate": "2020-06-06T18:09:40",
        "authors": [
            "Author D",
            "Author A",
            "Author C"
        ],
        "guid": "3dc4d8bb-d392-4470-abde-e1323d26af96",
        "systemId": "System2",
        "type": "politics"
    },
    {
        "id": "0208c46e-aa13-45e2-b2f1-7fac493f5aed",
        "title": "Breaking News",
        "description": "Latest updates in world events.",
        "link": "https://example.com/article/17",
        "publicationDate": "2022-08-21T17:06:26",
        "authors": [
            "Author B",
            "Author D",
            "Author A",
            "Author C"
        ],
        "guid": "e85761f6-59d1-4682-967e-4d4d815d60f3",
        "systemId": "System1",
        "type": "tech"
    },
    {
        "id": "d8f1cfc9-ef04-4e1e-a701-3ae229095d65",
        "title": "Global Events",
        "description": "Significant global events of the day.",
        "link": "https://example.com/article/18",
        "publicationDate": "2023-07-26T09:23:12",
        "authors": [
            "Author D",
            "Author A",
            "Author B"
        ],
        "guid": "bd1f2306-2bea-489c-9a1b-96101c3c097a",
        "systemId": "System1",
        "type": "tech"
    },
    {
        "id": "f8bd6a8c-1bd0-4510-b8b4-390e32ab735c",
        "title": "Market Update",
        "description": "Recent market trends and insights.",
        "link": "https://example.com/article/19",
        "publicationDate": "2022-04-29T06:28:52",
        "authors": [
            "Author D",
            "Author C"
        ],
        "guid": "332f902e-d662-4ee1-8d28-5b900dbbdc90",
        "systemId": "System1",
        "type": "tech"
    },
    {
        "id": "5647e100-8b61-4874-8e83-8542b546324c",
        "title": "Market Update",
        "description": "Latest breakthroughs in technology.",
        "link": "https://example.com/article/20",
        "publicationDate": "2023-05-09T01:51:04",
        "authors": [
            "Author C",
            "Author A",
            "Author B",
            "Author D"
        ],
        "guid": "b67e2948-e8e8-429a-89f1-a1245375218b",
        "systemId": "System3",
        "type": "politics"
    },
    {
        "id": "c2bdfa6b-e03b-44fe-9eda-b4c1d2cd34a1",
        "title": "Breaking News",
        "description": "Recent market trends and insights.",
        "link": "https://example.com/article/21",
        "publicationDate": "2021-08-07T21:27:36",
        "authors": [
            "Author D",
            "Author C",
            "Author A",
            "Author B"
        ],
        "guid": "d880efea-8918-46a8-b6d9-83ccae5e9925",
        "systemId": "System2",
        "type": "tech"
    },
    {
        "id": "df92a173-c9ac-4a6b-aadc-7a965cce15e8",
        "title": "Political Insight",
        "description": "New developments in the political arena.",
        "link": "https://example.com/article/22",
        "publicationDate": "2021-10-05T09:39:20",
        "authors": [
            "Author C",
            "Author D"
        ],
        "guid": "f35eabcc-4bb8-41fc-98c2-55eb0e0e080f",
        "systemId": "System1",
        "type": "tech"
    },
    {
        "id": "e3ce9558-17ac-48bc-ad45-a276b75fce87",
        "title": "Technology Advancements",
        "description": "New developments in the political arena.",
        "link": "https://example.com/article/23",
        "publicationDate": "2023-06-19T04:24:54",
        "authors": [
            "Author D",
            "Author B",
            "Author C",
            "Author A"
        ],
        "guid": "6553b8a0-5638-469f-a298-1e7bf91e5e18",
        "systemId": "System3",
        "type": "tech"
    },
    {
        "id": "3256abfa-8f65-49b4-b19f-d64d8c77a88c",
        "title": "Political Insight",
        "description": "Significant global events of the day.",
        "link": "https://example.com/article/24",
        "publicationDate": "2021-10-18T08:55:08",
        "authors": [
            "Author B",
            "Author A",
            "Author D",
            "Author C"
        ],
        "guid": "fb762a4d-afa8-4662-b996-177dc20d3fb0",
        "systemId": "System3",
        "type": "politics"
    },
    {
        "id": "86507cff-4bc2-4af6-ba31-200c511a8cf6",
        "title": "Global Events",
        "description": "Recent market trends and insights.",
        "link": "https://example.com/article/25",
        "publicationDate": "2020-06-21T22:30:08",
        "authors": [
            "Author A",
            "Author D",
            "Author C",
            "Author B"
        ],
        "guid": "3e646ad5-ec6c-415a-b39f-7a33a675cd5e",
        "systemId": "System3",
        "type": "tech"
    },
    {
        "id": "2c5f2110-c85a-46f7-8b2b-db09ddf088c9",
        "title": "Breaking News",
        "description": "New developments in the political arena.",
        "link": "https://example.com/article/26",
        "publicationDate": "2023-11-06T02:55:56",
        "authors": [
            "Author A"
        ],
        "guid": "7b27ee10-d0d1-4ee2-b992-0c269b2af6b5",
        "systemId": "System2",
        "type": "business"
    },
    {
        "id": "d98b3541-91a8-4e80-b637-169a85d82e3a",
        "title": "Technology Advancements",
        "description": "Latest updates in world events.",
        "link": "https://example.com/article/27",
        "publicationDate": "2022-03-19T02:27:33",
        "authors": [
            "Author A",
            "Author D",
            "Author B"
        ],
        "guid": "ba7916d3-8d39-4640-bcde-e9352d2ef06d",
        "systemId": "System3",
        "type": "business"
    },
    {
        "id": "ddec7387-80f9-4e14-88ad-555b4db628b5",
        "title": "Market Update",
        "description": "Latest breakthroughs in technology.",
        "link": "https://example.com/article/28",
        "publicationDate": "2023-09-10T21:42:45",
        "authors": [
            "Author B"
        ],
        "guid": "23e348f4-b0c2-48b4-8f98-e1db0c322d50",
        "systemId": "System1",
        "type": "politics"
    },
    {
        "id": "9216d5d6-7948-400d-90c3-4900e9c22e06",
        "title": "Technology Advancements",
        "description": "New developments in the political arena.",
        "link": "https://example.com/article/29",
        "publicationDate": "2023-04-08T22:36:36",
        "authors": [
            "Author B",
            "Author A",
            "Author C",
            "Author D"
        ],
        "guid": "b0b38c39-9d79-4929-8324-efa3deece117",
        "systemId": "System2",
        "type": "politics"
    }
];


