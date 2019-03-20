/*jshint esversion: 6 */
// ██╗      █████╗ ███╗   ██╗ ██████╗ ██╗   ██╗ █████╗  ██████╗ ███████╗
// ██║     ██╔══██╗████╗  ██║██╔════╝ ██║   ██║██╔══██╗██╔════╝ ██╔════╝
// ██║     ███████║██╔██╗ ██║██║ ████╗██║   ██║███████║██║ ████╗█████╗
// ██║     ██╔══██║██║╚██╗██║██║   ██║██║   ██║██╔══██║██║   ██║██╔══╝
// ███████╗██║  ██║██║ ╚████║╚██████╔╝╚██████╔╝██║  ██║╚██████╔╝███████╗
// ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
// language file for https://hey.network
/*
|  # FORMAT
|  language code format: ISO 639-1
|  refer to this list: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
|
|  # INSTRUCTIONS
|  you can either submit a pull request (highly preferred)
|  or send a translation file to this email address: nab@hey.network
|  1. Add you language name in the first object (LANGUAGES_LIST). Please
|  use the ISO 639-1 language code (link provided above)
|  2. Translate every sub object. You have some examples, follow the lead,
|  You should be fine. If you have any question, ask us on our Hey page.
|  3. Don't have Hey yet? Get it on https://hey.network
|  Join the chat on hey.network
|
*/

const LANGUAGES_LIST = {
	"en": "English",
	"fr": "Français",
	"jp": "日本語",
	"cn": "华语",
	"pl": "Polski"
};
const txt = {
	// GENERAL
	"general": {
		"confirm": {
			"fr": "OK",
			"en": "OK",
			"jp": "OK"
		},
		"cancel": {
			"fr": "Annuler",
			"en": "Cancel",
			"jp": "キャンセル"
		}
	},
	"home": {
		"start": {
			"fr": "S'inscrire",
			"en": "Start",
			"jp": "開始"
		},
		"premiumForLife": {
			"fr": "Premium à vie",
			"en": "Premium for life",
			"jp": "人生のためのプレミアム"
		},
		"forTheFirst": {
			"fr": "Pour le premier Million d'inscrits",
			"en": "for first 1M users",
			"jp": "最初の100万人のユーザー向け"
		},
    "chat": {
			"fr": "Chattez par <span class=\"grad\">#hashtag</span> et <span class=\"grad\">sujets tendance</span>",
			"en": "Chat by <span class=\"grad\">#hashtag</span> and <span class=\"grad\">trending topic</span>",
			"jp": "<span class=\"grad\">#ハッシュ</span> と <span class=\"grad\">トレンドトピックでチャット</span>"
		},
    "chatNfo": {
			"fr": "Choisissez votre chat et rencontrez des influenceurs, des joueurs, des célébrités et nouveau amis.",
			"en": "Choose your chat and connect with influencers, gamers, celebrities, and peers.",
			"jp": "あなたのチャットを選択し、インフルエンサー、ゲーマー、有名人、そして仲間とつながりましょう。"
		},
		"join": {
			"fr": "Rejoignez la discussion sur <span class=\"fluo\">#HeyNetwork</span>",
			"en": "Join the discussion on <span class=\"fluo\">#HeyNetwork</span>",
			"jp": "<span class=\"fluo\">#HeyNetwork</span> のディスカッションに参加しましょう"
		},
		"install": {
			"fr": "Installez l'<span class=\"fluo\">App</span> maintenant!",
			"en": "Download the <span class=\"fluo\">App</span> now!",
			"jp": "<span class=\"fluo\">#HeyNetwork</span> のディスカッションに参加しましょう"
		},
	}
};
