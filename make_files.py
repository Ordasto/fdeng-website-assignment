import os 

categories = ["70s", "80s", "90s"]
men_women = ["men", "women"]


for m_or_w in men_women:
    for category in categories:
        try:
            os.makedirs(f"pages/{m_or_w}/{category}")
        except:
            pass # dont care
        for i in range(1, 7): 
            file = f"pages/{m_or_w}/{category}/item_{i}.html"
            if not os.path.exists(file):
                with open(file, "w") as f:
                    print(f"Made file: {file}")
                    pass