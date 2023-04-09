import pandas as pd
import numpy as np
import Recommenders as Recommenders

song_df_1 = pd.read_csv('./assets/triplets_file.csv')
song_df_1.head()

song_df_2 = pd.read_csv('./assets/song_data.csv')
song_df_2.head()

song_df = pd.merge(song_df_1, song_df_2.drop_duplicates(['song_id']), on='song_id', how='left')
song_df.head()


# print(len(song_df_1), len(song_df_2))

len(song_df)  

# creating new feature combining title and artist name
song_df['song'] = song_df['title']+' - '+song_df['artist_name']
song_df.head()
# print(song_df.head());

# taking top 10k samples for quick results
song_df = song_df.head(10000)

# cummulative sum of listen count of the songs
song_grouped = song_df.groupby(['song']).agg({'listen_count':'count'}).reset_index()
song_grouped.head()
# print(song_grouped.head());

grouped_sum = song_grouped['listen_count'].sum()
song_grouped['percentage'] = (song_grouped['listen_count'] / grouped_sum ) * 100
song_grouped.sort_values(['listen_count', 'song'], ascending=[0,1])

pr = Recommenders.popularity_recommender_py()
pr.create(song_df, 'user_id', 'song')
pr.recommend(song_df['user_id'][5])
# print(pr.recommend(song_df['user_id'][5]))

pr.recommend(song_df['user_id'][100])

ir = Recommenders.item_similarity_recommender_py()
ir.create(song_df, 'user_id', 'song')

user_items = ir.get_user_items(song_df['user_id'][5])

# display user songs history
for user_item in user_items:
    print(user_item)
    
# give song recommendation for that user
ir.recommend(song_df['user_id'][5])

# give related songs based on the words
ir.get_similar_items(['Oliver James - Fleet Foxes', 'The End - Pearl Jam'])

