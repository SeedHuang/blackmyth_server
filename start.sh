pid=$(lsof -tiTCP:4000 | xargs -I {} sudo lsof -p {} | grep node | awk 'NR==1 {print $2}')  
# 如果 pid 变量被正确设置，则输出 pid2  
if [ -n "$pid" ]; then  
    echo "PID: $pid"  
    kill -9 $pid
else  
    echo "No node process found listening on port 4000"  
fi

DATABASEFOLDERS=("database/unit" "database/leader" "database/king" "database/person");

for DIRECTORY in "${DATABASEFOLDERS[@]}"; do
    if [ ! -d "$DIRECTORY" ]; then
        mkdir $DIRECTORY
    else
        echo "Already exists $DIRECTORY"
    fi
done

cross-env enviroment=prod nodemon module-alias/register index.js