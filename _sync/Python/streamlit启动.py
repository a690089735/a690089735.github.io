import streamlit.web.cli as stcli
import os
import sys

def streamlit_run():
     sys.argv=["streamlit", "run", os.path.join(os.path.dirname(sys.argv[0]), r'streamlitSDAI词库.py'), "--global.developmentMode=false"]
     sys.exit(stcli.main())

if __name__ == "__main__":
     streamlit_run()
