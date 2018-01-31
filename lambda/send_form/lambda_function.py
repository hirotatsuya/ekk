import slackweb

def lambda_handler(event, context):
  slack = slackweb.Slack(url="https://hooks.slack.com/services/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")
  message = '*EKK入会情報*\n氏名: {}\nメールアドレス: {}\n'.format(event['data']['name'], event['data']['email'])
  slack.notify(text=message, username='EKKBOT ByAWSLambda', icon_emoji=':flushed:', mrkdwn=True)
