

import pandas as pd
import numpy as np
import sys
import json

np.set_printoptions(threshold=sys.maxsize)


user = pd.read_json('../userdata/user.json')
del user['id']
del user['BMI']
del user['Weight']
user



user.describe()


user.NObeyesdad


weight = user['NObeyesdad'].tolist()
weight


n=0

obese= np.empty([2111,1], dtype=bool)

for x in weight:
    if weight[n] == 'normal_weight':
        obese[n] = False
    else:
        obese[n] = True
    n += 1
    
obese


from sklearn.model_selection import train_test_split


X = user.drop(['NObeyesdad'], axis=1).values
y = user['NObeyesdad'].values

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)


from sklearn.linear_model import LinearRegression

LR = LinearRegression()




LR.fit(X_train, y_train)



LR.predict(X_test).tolist()



LR.score(X_test, y_test)


new_use = pd.read_json('../userdata/newinputuser.json', typ='series')
new_row = pd.DataFrame([new_use])
new_roww = new_row.values


obesityindex = LR.predict(new_roww)
print(obesityindex)
obesity = {
    "obese":obesityindex
}
json_object = json.dumps(obesity, indent=4)

with open("./userdata/newuserinput.json", "w") as outfile:
    outfile.write(json_object)

