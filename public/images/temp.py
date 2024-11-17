orig_dict = {
    'a': {
	'b': [1, 2, 3],
	'c': {
	    'd': 3
	}
    }
}

new_dict = {
    'a': {
	'b': [4, 5, 6],
	'c': {
	    'e': 4
	},
	'f': 5
    },
    'g': 6
}
from deep_dict_update import deep_dict_update 

updated_dict = deep_dict_update(orig_dict, new_dict)
print(updated_dict)

