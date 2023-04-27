# import re
# tt = "sadad , ,asdadasd, asdsd, dasd, "
# r = re.sub(r'(\s*,\s*)+', r', ', tt)
# print(r)

# import re

# text = "The quick 123 brown fox 456 jumps over the lazy dog"
# pattern = r"\d+(?=[^\d]*$)"

# replacement = "x"

# match = re.search(pattern, text)
# if match:
#     last_match = match.group()
#     replaced_text = re.sub(last_match, replacement, text)
#     print(replaced_text)
# else:
#     print("No match found")

import re

text = "aaa 123 bbb 123 ccc123 ddd"
pattern = r"(.*)(123)(?!.*\2)"
replacement = "000"

result = re.sub(pattern, r"\g<1>" + replacement, text)
print(result)
